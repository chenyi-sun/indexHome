<?php
namespace app\index\controller;
class Index 
{
    public function index()
    {
        return 'ssss';
    }
    public function hello($name="ddddd"){
        return 'Hello!'.$name;
    }
}
