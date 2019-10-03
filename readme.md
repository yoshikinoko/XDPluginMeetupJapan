# Adobe XD Plugin Meetup サンプルコード

## 開発環境のセットアップ

1. 適当な場所にリポジトリをチェックアウト

    `git clone https://github.com/yoshikinoko/XDPluginMeetupJapan.git`

    もしくは [zipファイルをダウンロード](https://github.com/yoshikinoko/XDPluginMeetupJapan/releases/latest)

2. Adobe XD プラグイン開発フォルダー（`develop`フォルダー）を開く

    Adobe XD を起動した後に下記のメニューよりフォルダーを開いてください

    `プラグイン` >`開発版` > `開発フォルダーを表示`

3. 開発フォルダー（`develop`フォルダー) にフォルダごとコピーしてください。

    例えば、「01-01-scenegraph-sample」のフォルダーを **フォルダーごとコピー** してください

4. Adobe XDを起動し、プラグインを再読み込みしてください。

    `プラグイン` > `開発版` > `プラグインを再読み込み`

    **ショートカットキー**

    Mac: <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>

    Win: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>

5. Adobe XD のメニューより、プラグインを起動

    `プラグイン` > `プラグイン名`

## サンプルコードの概要

### 01-01 100pxの赤色の正方形を挿入する、もっとも簡単なプラグイン

[01-01-scenegraph-sample](./01-01-scenegraph-sample)

### 01-02 ショートカットキーを設定し、webpack, xdpm を用いたプロジェクトテンプレート

[01-02-scenegraph-sample-webpack](./01-02-scenegraph-sample-webpack)

01-01と01-02のプラグインのプレビュー

![01-01と01-02のプラグインのプレビュー](./readme-files/scenegraph-sample.gif)

### ダイアログを表示するプラグイン

[02-01-dialog-sample](./02-01-dialog-sample)

### ダイアログを表示し、 webpack, xdpm を用いたプロジェクトテンプレート

[02-02-dialog-sample-webpack](./02-02-dialog-sample-webpack)

#### ダイアログを表示するプラグインのプレビュー

![ダイアログを表示するプラグインのプレビュー](./readme-files/dialog-sample.gif)

## 参考資料・サイト

### 日本語

- [はじめてのAdobe XDプラグイン開発！定番のHello Worldを表示させてみよう \#AdobeXD \#AdobeMAX \- Adobe Blog](https://blogs.adobe.com/japan/web-getting-started-with-xd-plugin-development/)
- [Adobe XDプラグインのソースコードの解説 \#AdobeIO \#XDPlugin \#AdobeXD \- Adobe Blog](https://blogs.adobe.com/japan/cc-web-adobe-xd-plugin-quickstart-japanese/)
- [\#Adobe XD のパネルに対応したプラグインの開発 \- Adobe Blog](https://blogs.adobe.com/japan/cc-web-xd-plugin-developent-with-panel-ui/)
- [Adobe XD Plugins Advent Calendar 2018 \- Qiita](https://qiita.com/advent-calendar/2018/xdplugin?fbclid=IwAR0aTdPE0eNtR5utjXZriObs7c0NdzyO81aqX2RXbr2GPvTr1o0c_sfLjy4)
- [Adobe XD User Group Japan facebook group](https://www.facebook.com/XDUGJP/)
- [Adobe XD official facebook page](https://www.facebook.com/adobexdcc/)
- [Adobe XD \- Adobe Blog](https://blogs.adobe.com/japan/tag/adobe-xd/)
- [Creative Cloud 道場 \- Adobe Blog \#CCDojo](https://blogs.adobe.com/japan/creativecloud/ccdojo/)
- [Adobe XD CC体験版ダウンロード](https://www.adobe.com/jp/products/xd.html)
- [アドビ公式サイト](https://www.adobe.com/jp/)

### 英語

- [Adobe XD Platform](https://adobexdplatform.com/)
- [Adobe XD Plugin Developers Forum](https://forums.adobexdplatform.com/)
- [Adobe XD Github](https://github.com/adobexd)
- [Adobe I/O](https://www.adobe.io/)
- [Adobe Tech Blog](https://medium.com/adobetech)
- [Twitter #XDPlugin](https://twitter.com/hashtag/XDPlugin)

## LICENSE

Apache 2.0

## DISCLAIMER

You use this utility at your own risk. Under no circumstances shall Adobe be held liable for the use, misuse, or abuse of this utility.

Use of this utility means that you agree to Adobe's [Terms of Use](https://www.adobe.com/legal/terms.html) and the [Adobe Developer Additional Terms](https://wwwimages2.adobe.com/content/dam/acom/en/legal/servicetou/Adobe-Developer-Additional-Terms_en_US_20180605_2200.pdf).
