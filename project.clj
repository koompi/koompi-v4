(defproject koompi "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring-server "0.5.0"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [ring/ring-json "0.4.0"]
                 [ring/ring-ssl "0.3.0"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [yogthos/config "1.1.1"]
                 [org.clojure/clojurescript "1.10.339"
                  :scope "provided"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]
                  ; Backend 
                 [com.layerware/hugsql "0.4.9"]
                 [org.postgresql/postgresql "42.2.2"]
                 [clojure.jdbc/clojure.jdbc-c3p0 "0.3.3"]
                 [cljs-ajax "0.5.1"]
                 [prismatic/dommy "1.1.0"]
                 [com.draines/postal "2.0.2"]
                 [reagent-forms "0.5.42"]
                 [org.clojure/tools.reader "1.3.0"]]

  :plugins [[lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler koompi.handler/app
         :uberwar-name "koompi.war"}

  :min-lein-version "2.5.0"
  :uberjar-name "koompi.jar"
  :main koompi.server
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild
  {:builds {:min
            {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
             :compiler
             {:output-to        "target/cljsbuild/public/js/app.js"
              :output-dir       "target/cljsbuild/public/js"
              :source-map       "target/cljsbuild/public/js/app.js.map"
              :optimizations :advanced
              :pretty-print  false}}
            :app
            {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
             :figwheel {:on-jsload "koompi.core/mount-root"}
             :compiler
             {:main "koompi.dev"
              :asset-path "/js/out"
              :output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/cljsbuild/public/js/out"
              :source-map true
              :optimizations :none
              :pretty-print  true}}
            :test
            {:source-paths ["src/cljs" "src/cljc" "test/cljs"]
             :compiler {:main koompi.doo-runner
                        :asset-path "/js/out"
                        :output-to "target/test.js"
                        :output-dir "target/cljstest/public/js/out"
                        :optimizations :whitespace
                        :pretty-print true}}}}
  :doo {:build "test"
        :alias {:default [:chrome]}}

  :figwheel
  {:http-server-root "public"
   :server-port 6080
   :nrepl-port 7002
   :nrepl-middleware [cider.piggieback/wrap-cljs-repl
                      cider.nrepl/cider-middleware
                      refactor-nrepl.middleware/wrap-refactor]
   :css-dirs ["resources/public/css"]
   :ring-handler koompi.handler/app} :profiles {:dev {:repl-options {:init-ns koompi.repl}
                                                      :dependencies [[cider/piggieback "0.3.8"]
                                                                     [binaryage/devtools "0.9.10"]
                                                                     [ring/ring-mock "0.3.2"]
                                                                     [ring/ring-devel "1.6.3"]
                                                                     [prone "1.5.2"]
                                                                     [figwheel-sidecar "0.5.16"]
                                                                     [nrepl "0.4.4"]
                                                                     [cider/piggieback "0.3.8"]
                                                                     [pjstadig/humane-test-output "0.8.3"]]

                                                      :source-paths ["env/dev/clj"]
                                                      :plugins [[lein-figwheel "0.5.16"]
                                                                [lein-doo "0.1.10"]
                                                                [cider/cider-nrepl "0.15.1"]
                                                                [org.clojure/tools.namespace "0.3.0-alpha4"
                                                                 :exclusions [org.clojure/tools.reader]]
                                                                [refactor-nrepl "2.3.1"
                                                                 :exclusions [org.clojure/clojure]]]

                                                      :injections [(require 'pjstadig.humane-test-output)
                                                                   (pjstadig.humane-test-output/activate!)]

                                                      :env {:dev true}}

                                                :uberjar {:hooks [minify-assets.plugin/hooks]
                                                          :source-paths ["env/prod/clj"]
                                                          :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                                                          :env {:production true}
                                                          :aot :all
                                                          :omit-source true}})
