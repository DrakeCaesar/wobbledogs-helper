from PIL import Image, ImageDraw
import os

def crop_grid(image_path, origin, cell_width, cell_height, grid_size, output_folder, crop_size):
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
    
    debug_image_path = f"{output_folder}_debug_grid.png"
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

def crop_grid_from_folder(source_folder, output_folder, origin, cell_width, cell_height, grid_size, crop_size):
    # Ensure the output folder exists
    
    print(source_folder)
    print(output_folder)
    
    
    # os.makedirs(output_folder, exist_ok=True)
    
    # List all images in the source folder
    for image_name in os.listdir(source_folder):
        if image_name.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_path = os.path.join(source_folder, image_name)
            image = Image.open(image_path)
            draw = ImageDraw.Draw(image)
            num_rows, num_cols = grid_size
            x_origin, y_origin = origin
            
            # Debug image with rectangles
            for row in range(num_rows):
                for col in range(num_cols):
                    # Adjusting for different grid configurations, if necessary
                    # Here you might add conditions if grids vary between images
                    x0 = x_origin + col * cell_width
                    y0 = y_origin + row * cell_height
                    x1 = x0 + cell_width
                    y1 = y0 + cell_height
                    draw.rectangle([x0, y0, x1, y1], outline="red")
            
            # Save the debug image
            debug_image_path = os.path.join(output_folder, f"{os.path.splitext(image_name)[0]}_debug_grid.png")
            # image.save(debug_image_path)
            # print(f"Debug image saved to {debug_image_path}")
            

        # Adjusting for square cutouts
        # Determine the square cutout size, ensuring it's smaller and central in the cell
        cutout_size = min(crop_size, cell_width, cell_height)
        x_offset = (cell_width - cutout_size) // 2
        y_offset = (cell_height - cutout_size) // 2

        # Crop and save each cell
        for row in range(num_rows):
            for col in range(num_cols):
                x0 = x_origin + col * cell_width + x_offset
                y0 = y_origin + row * cell_height + y_offset
                x1 = x0 + cutout_size
                y1 = y0 + cutout_size

                crop = image.crop((x0, y0, x1, y1))
                base_name = os.path.splitext(image_name)[0]  # Extract base name of the file
                crop_path = os.path.join(output_folder, f"{base_name}_flora_{row}_{col}.png")
                crop.save(crop_path)
                print(f"Cropped image saved to {crop_path}")

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

input_folder = os.path.join(directory, 'data/food/screenshots')  # Folder where the screenshots are stored
output_folder = os.path.join(directory, 'data/food/cropped')  # Folder where the cropped images will be saved

print(input_folder)
print(output_folder)

origin = (71, 440)  # Adjust as per your layout
cell_width = 241  # Cell width
cell_height = 226  # Cell height
grid_size = (2, 3)  # Adjust based on your grid (columns, rows)
crop_size = 226  # Desired crop size, adjust as needed

# Run the function
crop_grid_from_folder(input_folder, output_folder, origin, cell_width, cell_height, grid_size, crop_size)

