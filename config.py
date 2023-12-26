import os
from dotenv import load_dotenv

# find the directory in which the current file resides
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# take environment variables from ./.config/.env file
load_dotenv(os.path.join(BASE_DIR, ".config", ".env"))