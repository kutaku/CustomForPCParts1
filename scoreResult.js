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

    const score12400  = "「 Core i5 12400: 19549 」";
    const score12600k = "「 Core i5 12600K: 27798 」";
    const score12700  = "「 Core i7 12700: 31131 」";
    const score12700k = "「 Core i7 12700K: 34722 」";

    const score3060   = "「 RTX3060 12GB: 17139 」";
    const score3060ti = "「 RTX3060Ti 8GB: 20533 」"; 
    const score3070   = "「 RTX3070 8GB: 22409 」";
    const score3070ti = "「 RTX3070Ti 8GB: 23714 」";
    const score3080   = "「 RTX3080 10GB: 25336 」";

    if(cpubtn12400.checked == true) {
        
            if(gpubtn3060.checked == true) {
                target.innerHTML = "<h3>12400＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆36688</b>：合計性能スコア</span></h2>" +
                "<span>passmark:" + score12400 + "+" + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ16GB / SSD1TB / マザーボードB660 / 電源BRONZE650W <br>・BTO推定価格：17万円前後 <br>・価格を抑えてのフルHDゲーミングにおすすめ！</span><br/>";
            } else if(gpubtn3060ti.checked == true) {
                target.innerHTML =  "<h3>12400＆3060ti SCORE</h3><br>" +
                "<h2><span><b>◆40082</b>：合計性能スコア</span></h2>" +
                "<span>passmark:" + score12400 + "+" + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ16GB / SSD1TB / マザーボードB660 / 電源BRONZE650W <br>・BTO推定価格：18万円前後 <br>・FPSやRPG等全ジャンルでのフルHDゲーミングにおすすめ！</span><br/>";
            } else if(gpubtn3070.checked == true) {
                target.innerHTML =  "<h3>12400＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆41958</b>：合計性能スコア</span></h2>" +
                "<span>passmark:" + score12400 + "+" + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：22万円前後 <br>・フルHD165Hzゲーミングにおすすめ！</span><br/>";
            } else if(gpubtn3070ti.checked == true) {
                target.innerHTML =   "<h3>12400＆3070ti SCORE</h3><br>" +
                "<h2><span><b>◆43263</b>：合計性能スコア</span></h2>" +
                "<span>passmark:" + score12400 + "+" + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：23万円前後 <br>・WQHD120Hzゲーミングにおすすめ！</span><br/>";
            } else if(gpubtn3080.checked == true) {
                target.innerHTML =   "<h3>12400＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆44805</b>：合計性能スコア</span></h2>" +
                "<span>passmark:" + score12400 + "+" + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD850W <br>・BTO推定価格：27万円前後 <br>・WQHD144Hzゲーミングにおすすめ！</span><br/>";
            }
    }
    else if (cpubtn12600K.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12600K＆3060 SCORE</h3><br>" +
            "<h2><span><b>◆44937</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12600k + "+" + score3060 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：22万円前後 <br>・フルHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12600K＆3060ti SCORE</h3><br>" +
            "<h2><span><b>◆48331</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12600k + "+" + score3060ti + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・フルHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12600K＆3070 SCORE</h3><br>" +
            "<h2><span><b>◆50207</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12600k + "+" + score3070 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：25万円前後 <br>・フルHD180Hz / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12600K＆3070ti SCORE</h3><br>" +
            "<h2><span><b>◆51512</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12600k + "+" + score3070ti + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・フルHD240Hz / WQHD144Hz ゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12600K＆3080 SCORE</h3><br>" +
            "<h2><span><b>◆53134</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12600k + "+" + score3080 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD850W <br>・BTO推定価格：30万円前後 <br>・WQHD165Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn12700.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12700＆3060 SCORE</h3><br>" +
            "<h2><span><b>◆48270</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700 + "+" + score3060 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードH670 / 電源GOLD750W <br>・BTO推定価格：23万円前後 <br>・ゲーム配信 / 動画編集におすすめ！</span><br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12700＆3060ti SCORE</h3><br>" +
            "<h2><span><b>◆51664</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700 + "+" + score3060ti + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / フルHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12700＆3070 SCORE</h3><br>" +
            "<h2><span><b>◆53540</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700 + "+" + score3070 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・ゲーム配信 / フルHD165Hz / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12700＆3070ti SCORE</h3><br>" +
            "<h2><span><b>◆54845</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700 + "+" + score3070ti + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / フルHD240Hz / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12700＆3080 SCORE</h3><br>" +
            "<h2><span><b>◆56467</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700 + "+" + score3080 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD850W <br>・BTO推定価格：33万円前後 <br>・ゲーム配信 / WQHD165Hz / 4Kゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn12700K.checked == true) {
        if(gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12700K＆3060 SCORE</h3><br>" +
            "<h2><span><b>◆51861</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700k + "+" + score3060 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / 動画編集におすすめ！</span><br/>";
        } else if(gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12700K＆3060ti SCORE</h3><br>" +
            "<h2><span><b>◆55255</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700k + "+" + score3060ti + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・ゲーム配信 / フルHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12700K＆3070 SCORE</h3><br>" +
            "<h2><span><b>◆57131</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700k + "+" + score3070 + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：27万円前後 <br>・ゲーム配信 / フルHD180Hz / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12700K＆3070ti SCORE</h3><br>" +
            "<h2><span><b>◆58436</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700k + "+" + score3070ti + "</span><br>" +
            "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / フルHD280Hz / WQHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if(gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12700K＆3080 SCORE</h3><br>" +
            "<h2><span><b>◆60058</b>：合計性能スコア</span></h2>" +
            "<span>passmark:" + score12700k + "+" + score3080 + "</span><br>" +
            "<span>・お勧め構成：メモリ64GB / SSD2TB / マザーボードZ690 / 電源GOLD850W <br>・BTO推定価格：36万円前後 <br>・ゲーム配信 / WQHD180Hz / 4K120Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else{
        //選択されていない時何も表示しない
    }
}