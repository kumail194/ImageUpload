# Use an official Python runtime as a parent image
FROM python:3.9.5-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy the rest of the application code in container
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=3001", "--reload"]