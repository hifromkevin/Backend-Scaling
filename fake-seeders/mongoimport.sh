#!/bin/bash

mongoimport --db weGotData --collection restaurants --type json --file ./fake-data/ten-milli.json --jsonArray