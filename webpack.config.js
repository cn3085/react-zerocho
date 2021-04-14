const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "word-relay-setting",
  mode: "development", //실서비스: production
  devtool: "eval", //빠르게 한다는 뜻, hidden-source-map도 있음

  resolve: {
    extensions: [".js", ".jsx"],
  }, //아예 이렇게 확장자 보고 불러오면 아래처럼 파일을 다 써줄 필요도 없다

  entry: {
    app: ["./client.jsx"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/, //여기다 룰을 적용하겠다
        loader: "babel-loader", //요거를 적용하겠다
        options: {
          presets: [
            //plugin들의 모음이 preset이다. presets의 배열을 넣고 기본설정을 쓸 수도 있지만 아래처럼 preset의 설정을 특정할 수도 있음
            [
              "@babel/preset-env", //preset-env 환경 읽어서 설정해주는거. 자동으로 옛날 브라우저 환경도 지원해줌
              {
                targets: {
                  //한국에서 브라우저 점유율 5% 이상, 옛날 브라우저에는 안 돌아도 되고 크롬 최신 버전에만 호환되면 된다고 하면 아래와같이
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react", //preset-react 리액트 코드 읽는거
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ], //state{} 쓰려면 이거 추가해야함
        },
      },
    ],
  }, //입력 받은 거에 모듈을 적용한 후
  plugins: [
    //이 플러그인도 적용하겠다 module이 먼저, plugins이 나중일 수도 있고 다 다름. 아무튼 적용.
    //모듈에도 plugin이 있지만 webpack 자체의 플러그인도 있다
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"), //실제경로, __dirname는 현재 폴더, C://.../.../lecture + /dist
    filename: "app.js",
    publicPath: "/dist/", //가상의 경로
  }, //출력
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
