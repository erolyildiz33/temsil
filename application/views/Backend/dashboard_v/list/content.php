<?php


echo "<pre>";
print_r(get_active_user());
echo "<hr/>";
print_r(get_user_roles());
echo "<hr/>";
echo isAllowedViewModule();
 md5(date_timestamp_get(date_create()).Rand());
echo "</pre>";





?>