import os
import pathlib
import datatier
import awsutil
import uuid
import sys
import boto3
from configparser import ConfigParser
import pandas as pd
import math 

# eliminate traceback so we just get error message:
sys.tracebacklimit = 0

#
# what config file should we use for this session?
#
config_file = 'config.ini'

s3_profile = 's3readwrite'

os.environ['AWS_SHARED_CREDENTIALS_FILE'] = config_file

# boto3.setup_default_session(profile_name=s3_profile)

configur = ConfigParser()
configur.read(config_file)
# bucketname = configur.get('s3', 'bucket_name')

# s3 = boto3.resource('s3')
# bucket = s3.Bucket(bucketname)

#
# now let's connect to our RDS MySQL server:
#
endpoint = configur.get('rds', 'endpoint')
portnum = int(configur.get('rds', 'port_number'))
username = configur.get('rds', 'user_name')
pwd = configur.get('rds', 'user_pwd')
dbname = configur.get('rds', 'db_name')

dbConn = datatier.get_dbConn(endpoint, portnum, username, pwd, dbname)

if dbConn is None:
  print('**ERROR: unable to connect to database, exiting')
  sys.exit(0)


def read_csv_file(file_path):
    df = pd.read_csv(file_path)
    # loop trough the dataframe and insert each row into the database
    print(df.columns)
    # for index, row in df.iterrows():
        # print(row)
        
    row = df.iloc[1]
    Uploaded_decade = row['Uploaded (decade)']
    potpourri = row['Songs Potpourri'] 
    if potpourri == math.nan: 
      potpourri = "No"
    lyrix = row['Lyrix']
    song_name = row['Song name']
    Artist = row['Artist']
    Link = row['Youtube Link']
    decade = row['Decade']
    genre = row['Genre']
    year = row['Year']

    # print the datatypes of the columns 
    # print(df.dtypes)

    # print(potpourri)

    print([Artist, decade, genre, lyrix, song_name, year, potpourri, Link])

    # sql = "INSERT INTO songs (artist, decade, genre, lyrix, song_name, song_year, songs_potpourri, youtube_link) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    # datatier.perform_action(dbConn, sql, [Artist, decade, genre, lyrix, song_name, year, potpourri, Link])

    

print(read_csv_file("backend/songs_clean.csv"))