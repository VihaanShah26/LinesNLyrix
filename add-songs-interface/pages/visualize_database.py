import datatier
import streamlit as st
import pandas as pd

endpoint = "linesnlyrix.ct4ue2aaohre.us-east-2.rds.amazonaws.com"
portnum = 3306
username ="admin"
pwd = "Lineslyrix!beyond"
dbname = "linesnlyrixdb"

dbConn = datatier.get_dbConn(endpoint, portnum, username, pwd, dbname)

if dbConn is None:
  print('**ERROR: unable to connect to database, exiting')

if dbConn is None:
  print('**ERROR: unable to connect to database, exiting')

results = datatier.retrieve_all_rows(dbConn, "SELECT * FROM songs")

# Get all contents of the songs table
songs_df = pd.DataFrame(results)

# Add filter button to accept genre from user
filter_genre = st.text_input("Filter by Genre")
filtered_songs_df = songs_df[songs_df[7].str.contains(filter_genre, case=False)] if filter_genre else songs_df

# Display filtered songs table
st.dataframe(filtered_songs_df)
