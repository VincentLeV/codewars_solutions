function Past([int] $h, [int] $m, [int] $s) {
  return $h * 3600000 + $m * 60000 + $s * 1000
}

# function Past(
#     [ValidateRange(0,23)][int] $h, 
#     [ValidateRange(0,59)][int] $m, 
#     [ValidateRange(0,59)][int] $s
# ) {

#     $ms = 1000
#     $hms = $h * 3600 * $ms
#     $mms = $m * 60 * $ms
#     $sms = $s * $ms
#     $t = $hms + $mms + $sms

#     return $t
# }
