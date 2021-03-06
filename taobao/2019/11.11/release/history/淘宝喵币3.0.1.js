"ui";
var app = "com.taobao.taobao";
var home = "com.taobao.tao.TBMainActivity";
var act = "com.taobao.browser.BrowserActivity";
var actCom = "android.widget.FrameLayout";
var actDepth = 3;
var actIndexInParent = 1;
var taskBtn = "android.widget.Button";
var taskDepth = 14;
var taskIndexInParent = 5;
var view = "android.view.View";
var searchHome = "com.taobao.search.searchedoor.SearcheDorrActivity";
var editText = "android.widget.EditText";
var editDepth = 2;
var editIndexInParent = 0;
var searchBtn = taskBtn;
var homeSearch = view;
var homeSearchDepth = 1;
var homeSearchIndexInParent = 8;
var confFile = files.getSdcardPath() + "/喵币定制/customer.conf";
var time = 0;
var stores = ["&userId=2089100916&shopId=111481369&pathInfo=/campaign-10827-88.htm#tq",
              "&userId=1035757927&shopId=73516010&pathInfo=/campaign-10827-113.htm#tq",
              "&userId=519286239&shopId=62832501&pathInfo=/campaign-10827-128.htm#tq",
              "&userId=3079263591&shopId=289321551&pathInfo=/campaign-10827-92.htm#tq",
              "&userId=2374579403&shopId=116386742&pathInfo=/campaign-10827-79.htm#tq",
              "&userId=2838892713&shopId=150920153&pathInfo=/campaign-10827-142.htm#tq",
              "&userId=2360209412&shopId=115862174&pathInfo=/campaign-10827-105.htm#tq",
              "&userId=201749140&shopId=57616696&pathInfo=/campaign-10827-117.htm#tq",
              "&userId=134363478&shopId=57301407&pathInfo=/campaign-10827-248.htm#tq",
              "&userId=92688455&shopId=57299736&pathInfo=/campaign-10827-148.htm#tq",
              "&userId=1790973264&shopId=106746477&pathInfo=/campaign-10827-85.htm#tq",
              "&userId=890482188&shopId=71955116&pathInfo=/campaign-10827-125.htm#tq",
              "&userId=749391658&shopId=68491548&pathInfo=/campaign-10827-127.htm#tq",
              "&userId=1114511827&shopId=101717810&pathInfo=/campaign-10827-144.htm#tq",
              "&userId=917264765&shopId=72571314&pathInfo=/campaign-10827-100.htm#tq",
              "&userId=160586276&shopId=57301770&pathInfo=/campaign-10827-75.htm#tq",
              "&userId=1714128138&shopId=104736810&pathInfo=/campaign-10827-276.htm#tq",
              "&userId=2228361831&shopId=113462750&pathInfo=/campaign-10827-511.htm#tq",
              "&userId=3164711246&shopId=306660112&pathInfo=/campaign-10827-61.htm#tq",
              "&userId=901409638&shopId=72217984&pathInfo=/campaign-10827-91.htm#tq",
              "&userId=3626596873&shopId=471050084&pathInfo=/campaign-10827-46.htm#tq",
              "&userId=3527212490&shopId=434208197&pathInfo=/campaign-10827-47.htm#tq",
              "&userId=533497499&shopId=62941831&pathInfo=/campaign-10827-111.htm#tq",
              "&userId=883737303&shopId=71799145&pathInfo=/campaign-10827-107.htm#tq",
              "&userId=2957642769&shopId=329012182&pathInfo=/campaign-10827-46.htm#tq",
              "&userId=2064892827&shopId=110224300&pathInfo=/campaign-10827-107.htm#tq",
              "&userId=446338500&shopId=62147762&pathInfo=/campaign-10827-171.htm#tq",
              "&userId=470168984&shopId=62377409&pathInfo=/campaign-10827-130.htm#tq",
              "&userId=1652554937&shopId=103715363&pathInfo=/campaign-10827-106.htm#tq",
              "&userId=217101303&shopId=57895461&pathInfo=/campaign-10827-499.htm#tq"];

importClass(com.stardust.autojs.core.ui.JsViewHelper);

function UI(){
    ui.layout(
        <frame>
            <vertical>
                <appbar>
                    <toolbar id="toobar" w="*" h="auto" title="定制组件" />
                </appbar>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?attr/selectableItemBackground">
                    <horizontal gravity="center_vertical">
                        <View bg="#ff5722" h="*" w="10" />
                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                            <text text="作者：Rukawalee" textSize="16sp"  w="*" h="auto" />
                            <text autoLink="web" text="GitHub：https://github.com/Rukawalee/Scripts" textSize="14sp" w="*" h="auto" />
                            <text autoLink="web" text="52PJ：https://www.52pojie.cn/thread-1045205-1-1.html" textSize="14sp"  w="*" h="auto" />
                        </vertical>
                    </horizontal>
                </card>
                <list id="choose">
                    <card id="{{id}}" w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?attr/selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View bg="#2196f3" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                <text text="组件：{{title}}" id="title" textColor="#222222" textSize="16sp" maxLines="1" />
                                <horizontal>
                                    <text text="classname：" textColor="#999999" textSize="14sp" />
                                    <input id="classname" text="{{className}}" gravity="center_horizontal" textSize="12sp" w="*" h="auto"/>
                                </horizontal>
                                <horizontal>
                                    <text text="depth：" textColor="#999999" textSize="14sp" />
                                    <input inputType="number" id="depth" text="{{depth}}" gravity="center_horizontal" textSize="12sp" w="64" h="auto" marginRight="10" />
                                    <text text="indexInParent：" textColor="#999999" textSize="14sp" />
                                    <input inputType="number" id="indexInParent" text="{{indexInParent}}" gravity="center_horizontal" textSize="12sp" w="64" h="auto" />
                                </horizontal>
                            </vertical>
                        </horizontal>
                    </card>
                </list>
            </vertical>
            <button id="def" text="默认" w="auto" h="auto" layout_gravity="bottom|center_horizontal" marginRight="64" marginBottom="25" />
            <button id="custom" text="定制" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" layout_gravity="bottom|center_horizontal" marginLeft="64" marginBottom="25" />
        </frame>
    );
    var chooses = [
        {
            id: "card0",
            title: "双11合伙人",
            className: actCom,
            depth: actDepth,
            indexInParent: actIndexInParent
        },
        {
            id: "card1",
            title: "领喵币",
            className: taskBtn,
            depth: taskDepth,
            indexInParent: taskIndexInParent
        },
        {
            id: "card2",
            title: "搜索页搜索框",
            className: editText,
            depth: editDepth,
            indexInParent: editIndexInParent
        }
    ];
    ui.choose.setDataSource(chooses);
    ui.def.on("click", () => {
        saveConf();
        ui.finish();
    });
    ui.custom.on("click", () => {
        actCom = update("card0", "classname");
        actDepth = update("card0", "depth");
        actIndexInParent = update("card0", "indexInParent");
        taskBtn = update("card1", "classname");
        taskDepth = update("card1", "depth");
        taskIndexInParent = update("card1", "indexInParent");
        editText = update("card2", "classname");
        editDepth = update("card2", "depth");
        editIndexInParent = update("card2", "indexInParent");
        saveConf();
    });
}

function saveConf(){
	files.ensureDir(confFile);
    var writer = open(confFile, "w", "utf-8");
    writer.writeline(new Date().getTime());
    writer.writeline(actCom + "," + actDepth + "," + actIndexInParent);
    writer.writeline(taskBtn + "," + taskDepth + "," + taskIndexInParent);
    writer.writeline(editText + "," + editDepth + "," + editIndexInParent);
    writer.flush();
    writer.close();
    toast("定制信息保存至" + confFile);
    ui.finish();
}

function loadConf(){
    if(files.exists(confFile)){
        var reader = open(confFile, "r", "utf-8");
        time -= reader.readline();
        var vs = reader.readline().split(",");
        actCom = vs[0];
        actDepth = vs[1];
        actIndexInParent = vs[2];
        vs = reader.readline().split(",");
        taskBtn = vs[0];
        taskDepth = vs[1];
        taskIndexInParent = vs[2];
        vs = reader.readline().split(",");
        editText = vs[0];
        editDepth = vs[1];
        editIndexInParent = vs[2];
        toast("使用定制组件");
    } else {
        toast("使用默认组件");
    }
}

function update(v, id){
    return JsViewHelper.findViewByStringId(ui.findView(v), id).text();
}

function init(tip, def, custom){
    loadConf();
    if(!files.exists(confFile) || interval()){
        dialogs.singleChoice(tip, [def, custom], 1, (sel) => {
            if(sel > 0){
                UI();
            } else {
                ui.finish();
            }
        });
    }
}

function interval(){
    day = time * 1.0 / 3600000;
    return (day > 3);
}

function loadApp(appName){
    log("欢迎使用喵币自动收获脚本");
    log("作者：Rukawalee");
    log("github.com/Rukawalee/Scripts");
    sleep(3000);
    log("设备：设置常亮");
    device.keepScreenOn();
    log("运行：手机淘宝");
    launch(appName);
    log("准备：手机淘宝主界面..");
    goHome(home);
}

function goHome(appHome){
    log("设备：缓冲耗时1.5s");
    sleep(1500);
    while(currentActivity() != appHome){
        log("状态：进入主界面中..");
        back();
        sleep(2500);
    }
}

function goAct(){
    sleep(1500);
    log("状态：查找活动入口组件..");
    var actIn = findComponent(actCom, actDepth, "", actIndexInParent, true).findOne(8000);
    if(actIn == null){
        log("提示：请定制双11合伙人组件");
        log("准备：手动进入活动页面");
    } else {
        actIn.click();
        log("状态：进入活动页面中..");
        log("提示：如进错页面，请检查组件");
    }
    var subThread = timeout(8000, currentActivity(), "组件{上限}被遮挡，多等一会儿");
    textContains("上限").waitFor();
    subThread.interrupt();
    log("状态：已进入活动页面");
    toCollect();
}

function collectCoin(tar){
    var obj = textContains(tar);
    if(obj.exists()){
        log("准备：领取" + tar + "金币");
        sleep(500);
        rectClick(obj.findOne().bounds());
        log("状态：金币领取成功");
        sleep(1000);
    }
}

function collectDouble(){
    collectCoin("上限");
    sleep(1000);
    if(text("翻倍领取").exists()){
        log("准备：金币翻倍领取");
        doTask("翻倍领取");
    }
}

function doTask(tar){
    var obj = text(tar);
    while(obj.exists()){
        log("准备：执行" + tar);
        obj.findOne().click();
        switch(tar){
            case "翻倍领取":
                wait(24, findCompnent(view, "", "观看完成", "", ""));
                break;
            case "去查看":
                wait(8, findCOmpnent(view, "", "", "", ""));
                break;
            case "去浏览":
            case "去进店":
                wait(26, textContains("已获得"),
                    textContains("已达上限"),
                    textContains("任务完成"),
                    textContains("任务已完成"),
                    findCompnent(view, "", "已获得", "", ""),
                    findComponent(view, "", "已达上限", "", ""),
                    findComponent(view, "", "任务完成", "", ""),
                    findComponent(view, "", "任务已完成", "", ""));
                signFor("签到领喵币");
                isHome();
                break;
            default:
                sleep(23000);
                break;
        }
        log("状态：完成一个任务");
        if(currentActivity() != act){
            back();
            sleep(3000);
            log("状态：缓冲耗时3s");
        }
    }
}

function isHome(){
    if(currentActivity() == home){
        log("准备：重新进入活动页");
        findCompnent(actCom, "", "首页", "", true);
        sleep(1500);
        goAct();
    }
}

function sign(tar){
    var obj = text(tar);
    while(obj.exists()){
        log("准备：执行" + tar);
        sleep(1000);
        obj.findOne().click();
        if(tar == "去签到"){
            var inSign = findComponent(view, "", "马上签到", "", true).findOne(10000);
            if(inSign != null){
                inSign.click();
            } else {
                inSign = textContains("去完成").findOne(4000);
                if(inSign != null){
                    inSign.click();
                    sleep(3000);
                    inSign = textContains("签到").findOne(1000);
                    if(inSign != null){
                        inSign.click();
                    }
                }
            }
            sleep(1000);
            log("准备：返回活动页..");
            back();
        }
        log("状态：完成" + tar);
        sleep(3500);
    }
}

function signFor(tar){
    var obj = findComponent(view, "", tar, "", "");
    if(obj.exists()){
        log("状态：执行" + tar);
        rectClick(obj.findOne().bounds());
        sleep(2000);
    }
}

function goStore(){
    goHome(home);
    log("设备：缓冲耗时2s");
    sleep(2000);
    rectClick(findComponent(view, "", "搜索", "", "").findOne().bounds());
    log("准备：查找搜索框..");
    sleep(3000);
    var edit = findComponent(editText, editDepth, "", editIndexInParent, true).findOne();
    var sPre = "https://market.m.taobao.com/app/tb-source-app/campaign/pages/index?wh_weex=true";
    var search = text("搜索").findOne();
    for(var i = 0; i < stores.length; i++){
        log("准备：签到" + (i + 1) + "个店铺");
        edit.setText(sPre + stores[i]);
        sleep(500);
        search.click();
        log("状态：正在进入" + (i + 1) + "个店铺");
        sleep(5000);
        signFor("签到领喵币");
        back();
        sleep(1500);
        findComponent("android.widget.TextView", "", "清空搜索框中内容", "", true).findOne().click();
    }
}

function rectClick(obj){
    click(obj.left, obj.top, obj.right, obj.bottom);
}

function wait(limit){
    log("状态：预估任务完成" + limit + "s");
    var condition = true;
    while(limit > 0 && condition){
        sleep(2000);
        limit -= 2;
        for(var arg in arguments){
            if(arg.exits()){
                condition = false;
                break;
            }
        }
        log("状态：活动耗时2s，预估还需" + limit + "s");
    }
}

function toCollect(){
    collectDouble();
    log("准备：执行活动任务..");
    findComponent(taskBtn, taskDepth, "", taskIndexInParent, true).findOne().click();
    sleep(3000);
    log("准备：执行签到");
    sign("签到");
    collectDouble();
    log("准备：执行去浏览");
    doTask("去浏览");
    collectDouble();
    log("准备：执行去查看");
    doTask("去查看");
    collectDouble();
    log("准备：执行去进店");
    doTask("去进店");
    collectDouble();
    log("准备：执行去签到");
    sign("去签到");
    log("准备：执行店铺签到");
    goStore();
}

function findComponent(cls, depth, desc, indexInParent, clickable){
    var obj = className(cls);
    if(depth != ""){
        obj = obj.depth(depth);
    }
    if(desc != ""){
        obj = obj.descContains(desc);
    }
    if(indexInParent != ""){
        obj = obj.indexInParent(indexInParent);
    }
    if(clickable != ""){
        obj = obj.clickable(clickable);
    }
    return obj;
}

function timeout(limit, active, tip){
    return threads.start(function(){
        var id = setInterval(function(){
            if(currentActivity() == active){
                log("等待超时，" + tip);
                notify();
            } else {
                clearInterval(id);
            }
        }, limit)
    });
}

function notify(){
    var times = 3;
    while(times-- > 1){
        device.vibrate(30 + times * 6);
        sleep(128);
    }
}

function over(){
    log("设备：取消常亮");
    device.cancelKeepingAwake();
    log("状态：任务完成");
    log("提示：如任务未完成，请多次尝试！");
    exit();
}

function main(){
    var lock = threads.lock();
    var initUI = lock.newCondition();
    var initTask = lock.newCondition();
    var share = (!files.exists(confFile) || interval());
    var UIThread = threads.start(function(){
        lock.lock();
        if(!share){
            setTimeout(function(){
                UIThread.interrupted();
            }, 8000);
            initUI.await();
        }
        init("更新定制组件？", "默认组件", "定制组件");
        toast("定制以后，请重新启动");
        initTask.signal();
        lock.unlock();
    });
    var taskThread = threads.start(function() {
        lock.lock();
        if (share){
            setTimeout(function(){
                taskThread.interrupted();
            }, 8000);
            initTask.await();
        }
        console.show();
        loadApp(app);
        goAct();
        notify();
        over();
        lock.unlock();
    });
}

auto.waitFor();
main();