from PIL import Image, ImageDraw, ImageStat
import os
import shutil

def clear_folder(folder_path):
    # Check if the folder exists
    if os.path.exists(folder_path):
        # Remove all files and subfolders in the folder
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                print(f"Failed to delete {file_path}. Reason: {e}")

def crop_grid(image_path, origin, cell_width, cell_height, grid_size, output_folder, crop_size):
    os.makedirs(output_folder, exist_ok=True)
    clear_folder(output_folder)
    image = Image.open(image_path)
    draw = ImageDraw.Draw(image)
    num_rows, num_cols = grid_size
    x_origin, y_origin = origin
    
    # Draw the grid for debug purposes
    for row in range(num_rows):
        for col in range(num_cols):
            if row == num_rows - 1 and col >= 6:  # Skip the excess cells in the last row
                continue
            x0 = x_origin + col * cell_width
            y0 = y_origin + row * cell_height
            x1 = x0 + cell_width
            y1 = y0 + cell_height
            draw.rectangle([x0, y0, x1, y1], outline="red")
    
    # debug_image_path = f"{output_folder}_debug_grid.png"
    # image.save(debug_image_path)
    # print(f"Debug image saved to {debug_image_path}")
    

    # Ensure the output folder exists
    os.makedirs(output_folder, exist_ok=True)

    # Adjusting for square cutouts
    # Determine the square cutout size, ensuring it's smaller and central in the cell
    cutout_size = min(crop_size, cell_width, cell_height)
    x_offset = (cell_width - cutout_size) // 2
    y_offset = (cell_height - cutout_size) // 2

    # Crop and save each cell
    for row in range(num_rows):
        for col in range(num_cols):
            # Adjusting for the last row's items count
            if row == num_rows - 1 and col >= 6:
                continue

            # Calculate the top-left and bottom-right corners of the crop area
            x0 = x_origin + col * cell_width + x_offset
            y0 = y_origin + row * cell_height + y_offset
            x1 = x0 + cutout_size
            y1 = y0 + cutout_size

            # Performing the crop
            crop = image.crop((x0, y0, x1, y1))
            crop_path = os.path.join(output_folder, f"flora_{row}_{col}.png")
            crop.save(crop_path)
            # print(f"Cropped image saved to {crop_path}")

def crop_grid_from_folder(source_folder, output_folder, low_variance_output_folder, duplicates_folder, origin, cell_width, cell_height, grid_size, crop_size):
    # Ensure output and special folders exist
    os.makedirs(output_folder, exist_ok=True)
    os.makedirs(low_variance_output_folder, exist_ok=True)
    os.makedirs(duplicates_folder, exist_ok=True)
    # Clear folders at the beginning
    clear_folder(output_folder)
    clear_folder(low_variance_output_folder)
    clear_folder(duplicates_folder)

    variances_encountered = []

    for image_name in os.listdir(source_folder):
        if image_name.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_path = os.path.join(source_folder, image_name)
            image = Image.open(image_path)
            num_rows, num_cols = grid_size
            x_origin, y_origin = origin

            for row in range(num_rows):
                for col in range(num_cols):
                    x0 = x_origin + col * cell_width + (cell_width - crop_size) // 2
                    y0 = y_origin + row * cell_height + (cell_height - crop_size) // 2
                    x1 = x0 + crop_size
                    y1 = y0 + crop_size

                    crop = image.crop((x0, y0, x1, y1))
                    stats = ImageStat.Stat(crop)
                    current_variances = stats.var  # Tuple of variances for each color channel

                    base_name = os.path.splitext(image_name)[0]

                    # Function to check if current variances are within 5 points of any in variances_encountered
                    def is_duplicate(variances, encountered_variances):
                        for encountered in encountered_variances:
                            if all(abs(v - e) <= 10 for v, e in zip(variances, encountered)):
                                return True
                        return False
                   # sum of variances as numbers
                    variance_str = int(sum(current_variances)/3)
                    
                    # filename = f"{variance_str}-{base_name}-food-{row}-{col}.png"
                    filename = f"{base_name}-food-{row}-{col}.png"
                    

                    if variance_str < 10 or (2400 < variance_str < 2500):
                        low_var_path = os.path.join(low_variance_output_folder, filename)
                        crop.save(low_var_path)
                    else:
                        if is_duplicate(current_variances, variances_encountered):
                            duplicate_path = os.path.join(duplicates_folder, filename)
                            crop.save(duplicate_path)
                        else:
                            variances_encountered.append(current_variances)
                            crop_path = os.path.join(output_folder, filename)
                            crop.save(crop_path)




directory = os.getcwd()
flora_image_path = os.path.join(directory, 'data/flora/screenshots/flora-screenshot.png')
flora_output_folder = os.path.join(directory, 'data/flora/cropped')
origin = (237, 325)  # Grid origin coordinates
cell_width = 210  # Cell width
cell_height = 217
  # Cell height
grid_size = (5, 10)  # Grid size as rows x columns
crop_size = 210  # Desired square cutout size, adjust based on your needs

# Ensure the parameters are correctly set to your needs before running
crop_grid(flora_image_path, origin, cell_width, cell_height, grid_size, flora_output_folder, crop_size)

input_folder = os.path.join(directory, 'data/food/screenshots') 
output_folder = os.path.join(directory, 'data/food/cropped') 
low_variance_output_folder = os.path.join(directory, 'data/food/low_variance_crops')  # Folder for low variance images
duplicate_folder = os.path.join(directory, 'data/food/duplicates')  # Folder for duplicate images
origin = (60, 415)  # Adjust as per your layout
cell_width = 247  # Cell width
cell_height = 247  # Cell height
grid_size = (2, 3)  # Adjust based on your grid (columns, rows)
crop_size = 235  # Desired crop size, adjust as needed
crop_grid_from_folder(input_folder, output_folder, low_variance_output_folder, duplicate_folder, origin, cell_width, cell_height, grid_size, crop_size)