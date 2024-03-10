from PIL import Image, ImageDraw
import os

def crop_grid(image_path, origin, cell_width, cell_height, grid_size, output_folder):
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
    image.save(debug_image_path)
    print(f"Debug image saved to {debug_image_path}")
    
    return
    
    # Crop and save each cell
    for row in range(num_rows):
        for col in range(num_cols):
            if row == num_rows - 1 and col >= 6:  # Skip the excess cells in the last row
                continue
            x0 = x_origin + col * cell_width
            y0 = y_origin + row * cell_height
            x1 = x0 + cell_width
            y1 = y0 + cell_height
            crop = image.crop((x0, y0, x1, y1))
            crop_path = f"{output_folder}/flora_{row}_{col}.png"
            crop.save(crop_path)
            print(f"Cropped image saved to {crop_path}")

current_working_directory = os.getcwd()
print(f"Current working directory: {current_working_directory}")
relative_path = os.path.join(current_working_directory, 'data')


# Example usage
image_path = os.path.join(relative_path, 'flora-screenshot.png')
output_folder = os.path.join(relative_path, 'flora')
origin = (237, 325)  # Grid origin coordinates
cell_width = 210  # Cell width
cell_height = 217
  # Cell height
grid_size = (5, 10)  # Grid size as rows x columns

crop_grid(image_path, origin, cell_width, cell_height, grid_size, output_folder)
