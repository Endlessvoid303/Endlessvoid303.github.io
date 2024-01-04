<?php

  $webhook_url = 'https://discord.com/api/webhooks/1192365086791184394/U3lsF_KumvwjhMHHk8YS-CC_zqBCeo2yqcuJFF0Urs61w-RQPUAa-ZGZb1K6NshN4waJhttps://discord.com/api/webhooks/1192365086791184394/U3lsF_KumvwjhMHHk8YS-CC_zqBCeo2yqcuJFF0Urs61w-RQPUAa-ZGZb1K6NshN4waJ';

  $msg = ["content" => "Hi, this is the message sent from php"];

  $headers = array('Content-Type: application/json'); 

  $ch = curl_init();
  curl_setopt( $ch,CURLOPT_URL, $webhook_url );
  curl_setopt( $ch,CURLOPT_POST, true );
  curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
  curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
  curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
  curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $msg ) );
  $response = curl_exec( $ch );
  curl_close( $ch );

  echo $response;
?>
