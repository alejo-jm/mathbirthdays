#
# find paths upwards
#
function upsearch () {
    test / == "$PWD" && return || test -e "$1" && echo "$PWD" && return || cd .. && upsearch "$1"
}

#
# get current directory in execution
#
BASEDIR=`pwd`/"$(dirname $0)"

#
# minify the App files
#
r.js -o "$BASEDIR/AppBuild.js"