java_binary(
    name = "client",
    main_class = "com.google.idea.blaze.ext.IntelliJExtClientCli",
    runtime_deps = [
        ":intellijext",
    ],
)

java_library(
    name = "intellijext",
    srcs = glob(["src/**/*.java"]),
    visibility = ["//visibility:public"],
    deps = [
        "//ext/proto:intellijext_java_grpc",
        "//ext/proto:intellijext_java_proto",
        "@com_google_guava_guava//jar",
        "@io_grpc_grpc_java//core",
        "@io_grpc_grpc_java//netty",
        "@io_netty_netty_common//jar",
        "@io_netty_netty_transport//jar",
        "@io_netty_netty_transport_native_epoll//jar",
        "@io_netty_netty_transport_native_unix_common//jar",
    ],
)

java_binary(
    name = "IntelliJExtTestServer",
    srcs = ["tests/com/google/idea/blaze/ext/IntelliJExtTestServer.java"],
    main_class = "com.google.idea.blaze.ext.IntelliJExtTestServer",
    deps = [
        "//ext/proto:intellijext_java_grpc",
        "//ext/proto:intellijext_java_proto",
        "//third_party/java/grpc:stub",
        "@io_grpc_grpc_java//core",
        "@io_grpc_grpc_java//netty",
        "@io_netty_netty_common//jar",
        "@io_netty_netty_transport//jar",
        "@io_netty_netty_transport_native_epoll//jar",
        "@io_netty_netty_transport_native_unix_common//jar",
    ],
)

java_test(
    name = "IntelliJExtServiceTest",
    srcs = ["tests/com/google/idea/blaze/ext/IntelliJExtServiceTest.java"],
    data = [
        "//ext:IntelliJExtTestServer_deploy.jar",
    ],
    test_class = "com.google.idea.blaze.ext.IntelliJExtServiceTest",
    deps = [
        ":intellijext",
        "//ext/proto:intellijext_java_proto",
        "@io_grpc_grpc_java//core",
        "@junit//jar",
        "@truth//jar",
    ],
)