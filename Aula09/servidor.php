<?php
    header("Content-type: application/xml; charset=UTF-8");
    $conn = mysqli_connect("localhost","root","852123","api_rest");

    if( $conn ){
        $result = mysqli_query( $conn, "SELECT * FROM tbl_clientes");
        $xml = '<?xml version="1.0" encoding="UTF-8" ?>';
        $xml .= '<lista_clientes>';
        while( $cliente = mysqli_fetch_array($result)){
            $xml .= '<cliente>';
            $xml .= '<id>'.$cliente["id"].'</id>';
            $xml .= '<nome>'.$cliente["nome"].'</nome>';
            $xml .= '<email>'.$cliente["email"].'</email>';
            $xml .= '<telefone>'.$cliente["telefone"].'</telefone>';
            $xml .= '</cliente>';
        }
        $xml .= '</lista_clientes>';
        echo $xml;
    }
