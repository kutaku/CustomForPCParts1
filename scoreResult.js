function onRadioButtonChange() {
    cpubtn12400 = document.getElementById("radio01-1");
    cpubtn12600K = document.getElementById("radio01-2");
    cpubtn12700 = document.getElementById("radio01-3");
    cpubtn12700K = document.getElementById("radio01-4");

    gpubtn3060 = document.getElementById("radio02-1");
    gpubtn3060ti = document.getElementById("radio02-2");
    gpubtn3070 = document.getElementById("radio02-3");
    gpubtn3070ti = document.getElementById("radio02-4");
    gpubtn3080 = document.getElementById("radio02-5");

    target = document.getElementById("output");

    if(cpubtn12400.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "要素12400to3060がチェック。<br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "要素12400to3060tiがチェック。<br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "要素12400to3070がチェック。<br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "要素12400to3070tiがチェック。<br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "要素12400to3080がチェック。<br/>";
        }
    }
    else if (cpubtn12600K.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "要素12600Kto3060がチェック。<br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "要素12600Kto3060tiがチェック。<br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "要素12600Kto3070がチェック。<br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "要素12600Kto3070tiがチェック。<br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "要素12600Kto3080がチェック。<br/>";
        }
    }
    else if (cpubtn12700.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "要素12700to3060がチェック。<br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "要素12700to3060tiがチェック。<br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "要素12700to3070がチェック。<br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "要素12700to3070tiがチェック。<br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "要素12700to3080がチェック。<br/>";
        }
    }
    else if (cpubtn12700K.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "要素12700Kto3060がチェック。<br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "要素12700Kto3060tiがチェック。<br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "要素12700Kto3070がチェック。<br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "要素12700Kto3070tiがチェック。<br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "要素12700Kto3080がチェック。<br/>";
        }
    }
    else{
        //何も表示しない
    }
}