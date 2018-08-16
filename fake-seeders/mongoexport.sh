mongoexport --db weGotData --collection restaurants --type=csv --fields _id,id,name,tagline,type,vicinity,priceLevel,zagatFood,zagatDecor,zagatService,longDescription --out ./fake-data/ten-milli.csv
