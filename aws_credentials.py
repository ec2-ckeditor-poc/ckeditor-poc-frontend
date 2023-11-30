import os
access_key = os.getenv('AWS_ACCESS_KEY')
secret_key = os.getenv('AWS_SECRET_KEY')

print(f'AWS_ACCESS_KEY={access_key}')
print(f'AWS_SECRET_KEY={secret_key}')