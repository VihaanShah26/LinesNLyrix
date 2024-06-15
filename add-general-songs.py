import pandas as pd
import datatier

endpoint = "linesnlyrix.ct4ue2aaohre.us-east-2.rds.amazonaws.com"
portnum = 3306
username ="admin"
pwd = "Lineslyrix!beyond"
dbname = "linesnlyrixdb"

dbConn = datatier.get_dbConn(endpoint, portnum, username, pwd, dbname)

if dbConn is None:
  print('**ERROR: unable to connect to database, exiting')

def read_csv_file(file_path):
    df = pd.read_csv(file_path)

    for index, row in df.iterrows():
        # Check for NaN values and replace them with None
        Artist = row['Artist']
        if pd.isna(Artist): 
            Artist = None
        decade = row['Decade']
        if pd.isna(decade): 
            decade = None
        genre = row['Genre']
        if pd.isna(genre): 
            genre = None
        lyrix = row['Lyrix']
        if pd.isna(lyrix): 
            lyrix = None
        song_name = row['Song name']
        if pd.isna(song_name): 
            song_name = None
        year = row['Year']
        if pd.isna(year): 
            year = None
        potpourri = row['Songs Potpourri']
        if pd.isna(potpourri): 
            potpourri = None
        Link = row['Youtube Link']
        if pd.isna(Link): 
            Link = None

        # Print the data to be inserted
        print([Artist, decade, genre, lyrix, song_name, year, potpourri, Link])

        # Insert data into SQL table
        sql = "INSERT INTO songs (artist, decade, genre, lyrix, song_name, song_year, songs_potpourri, youtube_link) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        datatier.perform_action(dbConn, sql, [Artist, decade, genre, lyrix, song_name, year, potpourri, Link])

# Example usage:
read_csv_file("songs_clean.csv")
