i=0
function pause(){
   read -p "$*"
}
cat tbi.txt
pause ''
sp='/-\|'
n=${#sp}
progress=0
working=true
rottime=0.01
printf ' '
while $working == true; do
	if progress=0; then
		clear
		echo ''
		cat tbi0.txt
		progress=$progress+100
		npm run build
	fi
	if progress==100; then
		working=false
	fi
    echo -ne '\b%' "${sp:i++%n:1}"
    sleep $rottime
done
cat tbi100.txt
pause ''
