import sqlite3
from collections import Counter
from os import listdir, remove
import time

directory = "Book Folder/"

wordSearch = ["death","beauty","truth","war","friends"]

databaseName = "IlliadWords.db"

if databaseName in listdir():
	remove(databaseName) 

conn = sqlite3.connect(databaseName)
c = conn.cursor()
c.execute('''CREATE TABLE wordCounts
             (title text, death real, beauty real, truth real, war real, friends real)''')

startTime = time.time()

for fileName in listdir(directory):
	if not fileName.startswith('.'):
		file = open(directory+fileName, "r", encoding='utf-8')
		wordcount = Counter(file.read().lower().replace('-', ' ').split())
		wordArray = [fileName]
		for word in wordSearch:
			wordArray.append(wordcount[word])
		c.execute('INSERT INTO wordCounts VALUES (?,?,?,?,?,?)', wordArray)
		conn.commit()

midTime = time.time()

for fileName in listdir(directory):
	if not fileName.startswith('.'):
		file = open(directory+fileName, "r", encoding='utf-8')
		wordArray = [fileName,0,0,0,0,0]
		for line in file:
			for i in range(5):
				wordArray[i+1] += line.lower().count(wordSearch[i])
		c.execute('INSERT INTO wordCounts VALUES (?,?,?,?,?,?)', wordArray)
		conn.commit()

endTime = time.time()

print(midTime-startTime)
print(endTime-midTime)

for row in c.execute('SELECT * FROM wordCounts ORDER BY title'):
    print(row)

conn.close()

