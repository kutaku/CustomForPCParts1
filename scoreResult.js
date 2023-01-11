function onRadioButtonChange() {
    cpubtn12400 = document.getElementById("radio01-1");
    cpubtn12600K = document.getElementById("radio01-2");
    cpubtn12700 = document.getElementById("radio01-3");
    cpubtn12700K = document.getElementById("radio01-4");

    cpubtn13400 = document.getElementById("radio01-5");
    cpubtn13600K = document.getElementById("radio01-6");
    cpubtn13700 = document.getElementById("radio01-7");
    cpubtn13700K = document.getElementById("radio01-8");

    gpubtn3060 = document.getElementById("radio02-1");
    gpubtn3060ti = document.getElementById("radio02-2");
    gpubtn3070 = document.getElementById("radio02-3");
    gpubtn3070ti = document.getElementById("radio02-4");
    gpubtn3080 = document.getElementById("radio02-5");

    target = document.getElementById("output");

    //passmarkスコア
    const score12400 = 19549;
    const score12600k = 27798;
    const score12700 = 31131;
    const score12700k = 34722;

    const score13400 = 26355;
    const score13600k = 38478;
    const score13700 = 36280;
    const score13700k = 47149;

    const score3060 = 17139;
    const score3060ti = 20533;
    const score3070 = 22409;
    const score3070ti = 23714;
    const score3080 = 25336;

    if (cpubtn12400.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12400＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12400 + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12400: " + score12400 + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ16GB / SSD1TB / マザーボードB660 / 電源BRONZE650W <br>・BTO推定価格：17万円前後 <br>・価格を抑えてのフルHDゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12400＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12400 + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12400: " + score12400 + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ16GB / SSD1TB / マザーボードB660 / 電源BRONZE650W <br>・BTO推定価格：18万円前後 <br>・FPSやRPG等全ジャンルでのフルHDゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12400＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12400 + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12400: " + score12400 + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：22万円前後 <br>・フルHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12400＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12400 + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12400: " + score12400 + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：23万円前後 <br>・WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12400＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12400 + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12400: " + score12400 + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD850W <br>・BTO推定価格：27万円前後 <br>・WQHD144Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn12600K.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12600K＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12600k + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12600K: " + score12600k + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：22万円前後 <br>・フルHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12600K＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12600k + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12600K: " + score12600k + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・フルHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12600K＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12600k + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12600K: " + score12600k + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：25万円前後 <br>・フルHD180Hz / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12600K＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12600k + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12600K: " + score12600k + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・フルHD240Hz / WQHD144Hz ゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12600K＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12600k + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 12600K: " + score12600k + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD850W <br>・BTO推定価格：30万円前後 <br>・WQHD165Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn12700.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12700＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700 + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700: " + score12700 + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードH670 / 電源GOLD750W <br>・BTO推定価格：23万円前後 <br>・ゲーム配信 / 動画編集におすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12700＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700 + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700: " + score12700 + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / フルHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12700＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700 + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700: " + score12700 + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・ゲーム配信 / フルHD165Hz / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12700＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700 + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700: " + score12700 + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / フルHD240Hz / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12700＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700 + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700: " + score12700 + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD850W <br>・BTO推定価格：33万円前後 <br>・ゲーム配信 / WQHD165Hz / 4Kゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn12700K.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>12700K＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700k + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700K: " + score12700k + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / 動画編集におすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>12700K＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700k + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700K: " + score12700k + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・ゲーム配信 / フルHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>12700K＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700k + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700K: " + score12700k + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：27万円前後 <br>・ゲーム配信 / フルHD180Hz / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>12700K＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700k + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700K: " + score12700k + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / フルHD280Hz / WQHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>12700K＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score12700k + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 12700K: " + score12700k + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ64GB / SSD2TB / マザーボードZ690 / 電源GOLD850W <br>・BTO推定価格：36万円前後 <br>・ゲーム配信 / WQHD180Hz / 4K120Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    //13世代
    else if (cpubtn13400.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>13400＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13400 + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13400: " + score13400 + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ16GB / SSD1TB / マザーボードB760 / 電源BRONZE650W <br>・BTO推定価格：19万円前後 <br>・価格を抑えてのゲーム配信 / フルHDゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>13400＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13400 + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13400: " + score13400 + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ16GB / SSD1TB / マザーボードB760 / 電源BRONZE650W <br>・BTO推定価格：21万円前後 <br>・ゲーム配信 / 全ジャンルでのフルHDゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>13400＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13400 + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13400: " + score13400 + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB760 / 電源GOLD750W <br>・BTO推定価格：23万円前後 <br>・ゲーム配信 / フルHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>13400＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13400 + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13400: " + score13400 + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB760 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>13400＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13400 + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13400: " + score13400 + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB760 / 電源GOLD850W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn13600K.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>13600K＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13600k + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13600K: " + score13600k + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：22万円前後 <br>・フルHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>13600K＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13600k + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13600K: " + score13600k + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・フルHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>13600K＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13600k + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13600K: " + score13600k + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：25万円前後 <br>・フルHD180Hz / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>13600K＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13600k + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13600K: " + score13600k + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・フルHD240Hz / WQHD144Hz ゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>13600K＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13600k + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i5 13600K: " + score13600k + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD850W <br>・BTO推定価格：30万円前後 <br>・WQHD165Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn13700.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>13700＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700 + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700: " + score13700 + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードH670 / 電源GOLD750W <br>・BTO推定価格：23万円前後 <br>・ゲーム配信 / 動画編集におすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>13700＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700 + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700: " + score13700 + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / フルHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>13700＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700 + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700: " + score13700 + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・ゲーム配信 / フルHD165Hz / WQHD120Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>13700＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700 + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700: " + score13700 + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD750W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / フルHD240Hz / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>13700＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700 + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700: " + score13700 + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードB660 / 電源GOLD850W <br>・BTO推定価格：33万円前後 <br>・ゲーム配信 / WQHD165Hz / 4Kゲーミングにおすすめ！</span><br/>";
        }
    }
    else if (cpubtn13700K.checked == true) {
        if (gpubtn3060.checked == true) {
            target.innerHTML = "<h3>13700K＆3060 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700k + score3060) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700K: " + score13700k + " + RTX3060 12GB: " + score3060 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：24万円前後 <br>・ゲーム配信 / 動画編集におすすめ！</span><br/>";
        } else if (gpubtn3060ti.checked == true) {
            target.innerHTML = "<h3>13700K＆3060Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700k + score3060ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700K: " + score13700k + " + RTX3060Ti 8GB: " + score3060ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：26万円前後 <br>・ゲーム配信 / フルHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070.checked == true) {
            target.innerHTML = "<h3>13700K＆3070 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700k + score3070) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700K: " + score13700k + " + RTX3070 8GB: " + score3070 + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：27万円前後 <br>・ゲーム配信 / フルHD180Hz / WQHD144Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3070ti.checked == true) {
            target.innerHTML = "<h3>13700K＆3070Ti SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700k + score3070ti) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700K: " + score13700k + " + RTX3070Ti 8GB: " + score3070ti + "</span><br>" +
                "<span>・お勧め構成：メモリ32GB / SSD1TB / マザーボードZ690 / 電源GOLD750W <br>・BTO推定価格：28万円前後 <br>・ゲーム配信 / フルHD280Hz / WQHD165Hzゲーミングにおすすめ！</span><br/>";
        } else if (gpubtn3080.checked == true) {
            target.innerHTML = "<h3>13700K＆3080 SCORE</h3><br>" +
                "<h2><span><b>◆" + (score13700k + score3080) + "</b>：合計性能スコア</span></h2>" +
                "<span>passmark " + "Core i7 13700K: " + score13700k + " + RTX3080 10GB: " + score3080 + "</span><br>" +
                "<span>・お勧め構成：メモリ64GB / SSD2TB / マザーボードZ690 / 電源GOLD850W <br>・BTO推定価格：36万円前後 <br>・ゲーム配信 / WQHD180Hz / 4K120Hzゲーミングにおすすめ！</span><br/>";
        }
    }
    else {
        //選択されていない時何も表示しない
    }
}
