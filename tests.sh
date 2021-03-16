
# Take user input and run tests by package and/or environment
# can be set up to accept flags such as ./tests.sh website.staging -p=9000

IN=$1
arrIN=(${IN//./ })

if [ $# -eq 0 ]; then
    echo "Too few arguments provided, need [package]? "
    exit 1
fi

# add flag support
# while getopts a:p: flag
# do
#     case "${flag}" in
#         a) site=${OPTARG};;
#     esac
# done

#npx codeceptjs run -c "./packages/${arrIN[0]}/configs/${IN}.codecept.conf.js"
#npx run codeceptjs:ui --config "./packages/${arrIN[0]}/configs/${IN}.codecept.conf.js"

#npx codecept-ui --app --config "./packages/${arrIN[0]}/configs/${IN}.codecept.conf.js"

echo ./packages/${arrIN[0]}/configs/${IN}.codecept.conf.js

codecept run --config="./packages/website/configs/website.staging.codecept.conf.js"
