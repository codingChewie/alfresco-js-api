#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

FOLDEROUT=src/api-new

rm -rf $FOLDEROUT

$DIR/generate.sh -def $DIR/../definitions/alfresco-auth.json -o $DIR/../$FOLDEROUT/auth-rest-api/
$DIR/generate.sh -def $DIR/../definitions/activiti-api.json -o $DIR/../$FOLDEROUT/activiti-rest-api/
$DIR/generate.sh -def $DIR/../definitions/alfresco-core.yaml -o $DIR/../$FOLDEROUT/content-rest-api/
$DIR/generate.sh -def $DIR/../definitions/alfresco-discovery.yaml -o $DIR/../$FOLDEROUT/discovery-rest-api/
$DIR/generate.sh -def $DIR/../definitions/alfresco-search.yaml -o $DIR/../$FOLDEROUT/search-rest-api/

$DIR/generate.sh -def $DIR/../definitions/gs-classification-api.yaml -o $DIR/../$FOLDEROUT/gs-classification-rest-api/
$DIR/generate.sh -def $DIR/../definitions/gs-core-api.yaml -o $DIR/../$FOLDEROUT/gs-core-rest-api/
