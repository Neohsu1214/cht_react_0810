# CHT React & Full Stack

## Lab1_Node_NPM_JS - lab3
* when proxy is required, use
```javascript
var request = require('request');
var URL = "https://www.cwb.gov.tw/V8/C/"
var PROXY_URL = "http://proxy.cht.com.tw:8080"
// 原本的 request 設定 proxy之後， delegate 給另外建立一個 proxyRequest 物件來做事情
var proxyRequest = request.defaults({ 'proxy': PROXY_URL })

// function (error, responese, body) 是基本的 callback handler 宣告格式
// 傳回是成功的資料會存到body中
proxyRequest(URL, function (error, responese, body) {
    if (!error && responese.statusCode == 200) {
        console.log(body);
    } else {
        console.log(error);
        console.log(responese.statusCode);
        console.log(body);
    }
})

console.log("Hi, my program finished")

```

## Lab1_Node_NPM_JS - lab48,49 javascript也是有記憶體處理的唷！
* stack
* heap
   * variable
   * buffer: 用來處理原始資料，方便在不同語言間傳遞資料
* global
* constant
* code

## Lab2_Babel_Modern_JS_Syntax
* 初始化babel 專案
```
    npm init -y
```
* 安裝babel指令套件與webpack套件
```
npm install babel-loader @babel/core @babel/cli @babel/preset-env webpack
```
* 查看babel版本
```
npx babel --version
```
* 使用babel進行轉譯(轉譯到目前最低限度的javascript版本，若要轉譯成ES6,7等可支援的，必須安裝別的外掛)
```
npx babel lab1_var_let_const.js
```
* 在package.json給定『"build": "babel src -d out"』後，即可透過以下指令，將指定目錄中的檔案都編譯成Legacy JS
```
npm run build
```

## Lab3 建立 React 專案
* 初始化專案(專案名稱不可以有大寫)，用 npx 的好處是每次建立專案都會使用最新的套件
```
npx create-react-app lab3_react_start
```
* 啟動開發模式(會在 http://localhost:3000 啟動服務)
```
npm run start
```
* Chrome 安裝外掛工具（可以偵測所開啟的網頁是dev還是prod，並在F12中可看到Components跟Profiler兩個工具)
```
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=zh-TW
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=zh-TW
```
* 安裝 serve 套件 (之後可以用 serve -s build 啟動 production 版本的 build)
```
npm install -g serve
```

### React Component 的 Props 與 State
* Props 可以視為是Components之間溝通的『參數』，所以是不可變的
* State 為Component內自己可以動用的『變數』，所以是可變的

### Axios 處理的項目
* 處理複雜的 Request/Response 的資料處理：straam -> buffer -> json
* 進行非同步 ajax 呼叫及 promise 處理
* 所以到我們手上，我們只需要針對非同步呼叫後的狀況進行處理：then, fail, finally 等

### Redux
* Components 之間的資料傳遞若都是靠props 時，要跨多層次 Components 傳遞資料會很麻煩，所以 Redux就出現了！
* 可適用於 React, Vue(?!), Angular(?!)
* 若要再React上使用，要安裝 react-redux 套件
* 是一個store工具，類似 Windows 的 Registry用來存放資料

# 後端開發 with IntelliJ
## 一些 IntelliJ 上的設定
1. Configure Settings
( ) (不選) Reopen projects on startup
Open Project in New Window

2. Configure/Structure for new project
Build/Execution/Deployment
Compiler/Annotation Processors
(***) Enable annotation processing

3. Configure/Edit Custom VM Options
-Xms128m
-Xmx750m
==>
-Xms2048m
-Xmx2048m

4. Editor/General ==> Change font size with ctrl+Mouse wheel
Font Source Code Pro
Size 24
Line spacing 0.8
https://github.com/adobe-fonts/source-code-pro

5. enable intelliJ proxy setting

### 從 start.spring.io 建立 springboot 專案
1. https://start.spring.io/
2. 所需要的套件與資訊（湊成的URL)
	https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.3.3.RELEASE&packaging=jar&jvmVersion=11&groupId=com.chtti.fullstack.demo&artifactId=Backend1&name=Backend1&description=Demo%20project%20for%20Spring%20Boot%20to%20provide%20backend&packageName=com.chtti.fullstack.demo.Backend1&dependencies=devtools,devtools,lombok,lombok,web,data-jpa,h2
3. 從 IntelliJ 匯入Springboot專案
	如果是 gradle 專案，直接點選或拖拉 build.gradle
	如果是 maven 專案，請開啟pom.xml 檔
		 File/New/Project from Existing Source
		(for maven)
		C:\Users\chtti\Downloads\Backend1_maven\pom.xml

### add `gradle.properties` under `.gradle`
```
systemProp.http.proxyHost=proxy.cht.com.tw
systemProp.http.proxyPort=8080
systemProp.https.proxyHost=proxy.cht.com.tw
systemProp.https.proxyPort=8080
```

### 一些 gradlew 的指令
* 查版本
```
./gradlew --version
```
* 直接執行sprintgboot專案，執行CI進行測試項目
```
./gradlew bootrun
```

### 一些 mvnw 的指令
* 查版本
```
./mvnw --version
```
* 直接執行sprintgboot專案，執行CI進行測試項目
```
./mvnw spring-boot:run
```

### 執行 springboot 專案的三種方式
可參考 https://blog.xuite.net/hs19890622/job/388606028-%E5%9F%B7%E8%A1%8CSpring+Boot+%E5%B0%88%E6%A1%88%E7%9A%84%E6%96%B9%E5%BC%8F
1. bootrun
2. 包裝成可執行檔 jar
3. 包裝成可部署檔 war

### JUnit Test 基礎原則
* Model要有 ModelTest
* Repository 要有 RepositoryTest
* Service 要有 ServiceTest
* Controller...要用工具測試啦！不能再用JUnit了！
  * AdvancedRestClient
  * Postman
  * 可在 /h2-console 查看資料寫入結果

### 透過 Swagger工具產生 SwaggerUI
* https://mvnrepository.com/artifact/io.springfox/springfox-swagger2
* https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui
* 修改 build.gradle 加入
  * implementation 'io.springfox:springfox-boot-starter:3.0.0'
  * implementation 'io.springfox:springfox-swagger-ui:3.0.0'
* 可以在 localhost:8080/swagger-ui/ 看到結果，並進行 on-line 測試

### Springboot 開發歷程
1. 定義 Model -> 寫 Model Test Class
2. 定義 Repository -> 寫 Repository Test Class
3. 定義 Service -> 寫 Service Test Class
4. 定義 RestController -> 用工具測試 RestController (等都開發成熟後再去寫測試程式)

5. 定義 Model 與限制 ex: NotBlank, Size, Column...etc
6. RestController 透過 BindingResult 來取得 因限制丟出的錯誤
7. 將 BindingResult 的處理獨立成一個Method 供其他 RestController 可共用處理 BindingResult 資料
8. 對於 非BindingResult 可以處理的RuntimeException，要另外定義 Exception, ExceptionResponse 與 ExceptionHandler(ControllerAdvice) 來處理 Globally 的 Exception 
   如此才能將 RuntimeException 造成的 Http 500 改用別的 HttpStatus Code
   
9. 等一切的 Exception 處理都到位後，才開始寫 RestController 的 測試程式
   要對增刪改查都驗證過

10. 切記！別讓後端的內部錯誤資訊，直接原封不動地拋到前端去！

11. 查找資料的結果，務必要針對『沒有資料(Http 200)』跟『查不到(Http 400)』做不同的處理!

### 一個觀察Java 記憶體使用狀況的工具
* VisualVM
```
https://visualvm.github.io/   
```
* 修改 visualvm.cfg，設定 jdk home 目錄
```
visualvm_jdkhome="C:\\openjdk\\jbrsdk-11_0_8"
```
* 安裝外掛程式
1. VisualGC
2. VisualVM-extensions

## Docker 啓動微服務
### Docker UI/Settings/Resources/Proxies
```
proxy.cht.com.tw:8080
proxy.cht.com.tw:8080
localhost,127.0.0.1
```
### 啟動 MSSQL 的 container
```
docker run -e "ACCEPT_EULA=y" -e "SA_PASSWORD=User1@302" -p 1433:1433 --name mssql -d mcr.microsoft.com/mssql/server:2019-latest
```
### 下載 DBeaver 連線 MSSQL
```
https://dbeaver.io/files/dbeaver-ce-latest-installer.pkg
```
### Springboot 專案安裝 MSSQL jdbc driver
* 找到 mvn 上的 mssql jdbc driver
* 修改 build.gradle 加入
```
// https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc
compile group: 'com.microsoft.sqlserver', name: 'mssql-jdbc', version: '8.4.1.jre11'
```
* 修改 IntelliJ 專案 config 另外新增一個設定檔，使讀取 application-mssql.properties
```
-Xmx2048m -Xms2048m -Dspring.profiles.active=mssql
```
* application-mssql.properties 內容如下
```
spring.h2.console.enabled=false
spring.datasource.url=jdbc:sqlserver://127.0.0.1;databaseName=ReactBoot
spring.datasource.username=sa
spring.datasource.password=User1@302
spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format-sql=true
spring.jpa.hibernate.dialect=org.hibernate.dialect.SQLServer2012Dialect
#create: 啟動時建立Table, 下次啟動會覆蓋上次的, 故會造成資料遺失
#update: 若無Table則啟動時建立, 若有則視有無變更自動Update
#create-drop:啟動時建立Table, 當次Session關閉則刪除
spring.jpa.hibernate.ddl-auto=create
```
* 原本的 application.properties 就改名成 application-h2.properties 吧，但記得要改一下啟動參數才會去抓 h2 DB
```
-Xmx2048m -Xms2048m -Dspring.profiles.active=h2
```

# Cache
## ehcache: 介於 Connection Pool 與 JPA 之間的快取技術，使不會頻繁地存取DB
```
https://www.ehcache.org/
```

# 啓動微服務
## 產生 jar 檔 (不會跑test)
```
./gradlew bootJar
```
## 啟動 jar 檔 (參數的順序很重要！)
``` mssql版
java -Xmx2048m -Xms2048m -Dspring.profiles.active=mssql -jar build/libs/Backend1-0.0.1-SNAPSHOT.jar 
```
``` h2版
java -Xmx2048m -Xms2048m -Dspring.profiles.active=h2 -jar build/libs/Backend1-0.0.1-SNAPSHOT.jar 
```
## 建立 Dockerfile 包裝 docker image (DB先設定成連線h2版本)
```
FROM adoptopenjdk/openjdk11:latest
EXPOSE 8080
ARG JAR_FILE=build/libs/Backend1_gradle-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Xmx2048m","-Xms2048m","-Dspring.profiles.active=h2","-jar","/app.jar"]
```
## 包裝產出 docker image
```
docker build -t boot1 . --no-cache
```
## 啟動 container 帶起服務
```
docker run -p 8080:8080 boot1
```