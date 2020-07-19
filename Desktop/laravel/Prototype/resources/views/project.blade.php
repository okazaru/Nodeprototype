@extends('layouts.app')

@section('content')
<div class="alert alert-success" role="alert">
        <form action="" method="post">
            <input type="text" name="projectName">
            <button type="submit">保存</button>
        </form>
            <button id="pdf">PDF</button>
</div>


<div class="brockmenu project-content">
    <ul class="list-group">
 
        <div class="btn-group dropleft" stylq="transition-duration:2.0">
            <li class="list-group-item btn dropdown-toggle var getlist" 　onclick="obj=document.getElementById('openvar').style; 
            obj.display=(obj.display=='none')?'block':'none';" 
            data-toggle="dropdown">変数</li> 
        </div>
            <ul class="list-group" id="openvar" style="display: none; clear: both;">
                <li class="list-group-item btn var" id="stringcreate">String</li>
                <li class="list-group-item btn var" id="integercreate">integer</li>
                <li class="list-group-item btn var" id="doublecreate">double</li>
                <li class="list-group-item btn var" id="arraycreate">array</li>
            </ul>
        <div class="btn-group dropleft">
            <li class="list-group-item btn dropdown-toggle con getlist" 　onclick="obj=document.getElementById('opencon').style; obj.display=
            (obj.display=='none')?'block':'none';" 
            data-toggle="dropdown">条件</li> 
        </div>
            <ul class="list-group" id="opencon" style="display: none; clear: both;">
                <li class="list-group-item btn con" id="ifcreate">if</li>
                <li class="list-group-item btn con" id="elseifcreate">elseif</li>
                <li class="list-group-item btn con" id="elsecreate">else</li>
                <li class="list-group-item btn con" id="switchcreate">switch</li>
                <li class="list-group-item btn con" id="casecreate">case</li>
            </ul>
        <div class="btn-group dropleft">
            <li class="list-group-item btn dropdown-toggle roop getlist" 　onclick="obj=document.getElementById('openroop').style; obj.display=
            (obj.display=='none')?'block':'none';" 
            data-toggle="dropdown">反復</li> 
        </div>
            <ul class="list-group" id="openroop" style="display: none; clear: both;">
                <li class="list-group-item btn roop" id="forcreate">for</li>
                <li class="list-group-item btn roop" id="whilecreate">while</li>
            </ul>
        <div class="btn-group dropleft">
            <li class="list-group-item btn dropdown-toggle event getlist" 　onclick="obj=document.getElementById('openevent').style; obj.display=
            (obj.display=='none')?'block':'none';" 
            data-toggle="dropdown">イベント</li> 
        </div>
            <ul class="list-group" id="openevent" style="display: none; clear: both;">
                <li class="list-group-item btn event" id="clickcreate">click</li>
                <li class="list-group-item btn event" id="loadcreate">load</li>
                <li class="list-group-item btn event" id="mousemovecreate">mousemove</li>
                <li class="list-group-item btn event" id="scrollcreate">scroll</li>
            </ul>
    </ul>

</div>

<div class="brockdetail project-content">

</div>

<div class="mainview project-content" id="main"　cmanOMat="area">
    <div id="gomi">
    <img src="img/スクリーンショット-2016-09-18-21.13.58.png" id="gomibako" width="40" height="40" alt="">
    </div>
</div>
                    


                   


@endsection
