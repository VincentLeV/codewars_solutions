<?php
function opposite($n) {
  return $n > 0 ? -abs($n) : abs($n);
}

opposite(5);
opposite(-34);
?>