<?php
define('APP_PATH', __DIR__ . '/../application/');
// 加载框架引导文件
require __DIR__ . '/../thinkphp/start.php';

?>
<body>
    <form action="http://www.testth.com/public/ss.php/Ss/ss/hello">
    <!--
        index.php
        /Index/ 模块
        /index/ 控制器
        /hello  操作
    -->
        <input type="text" value="" name="name"/>
        <input type="submit" value="提交"/>
    </form>
    <form action="http://www.testth.com/public/ss.php/Ss/ss/index">
        <input type="text" value="" name="name"/>
        <input type="submit" value="提交"/>
    </form>

</body>
</html>