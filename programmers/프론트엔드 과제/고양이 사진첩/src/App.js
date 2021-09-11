import ImageView from "./components/ImageView.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";
import Loading from "./components/Loading.js";

import { request } from "./api/api.js";

// App.js
const cache = {};

export default function App($app) {
    this.state = {
        isRoot: false,
        nodes: [],
        depth: [],
        selectedFilePath: null,
        isLoading: false,
    };

    const loading = new Loading({ $app, initialState: this.state.isLoading });
    // Breadcrumb 조율
    const breadcrumb_node = document.querySelector(".Breadcrumb");

    const breadcrumb = new Breadcrumb({
        breadcrumb_node,
        initialState: this.state.depth,
        onClick: (index) => {
            if (index === null) {
                this.setState({
                    ...this.state,
                    depth: [],
                    nodes: cache.root,
                });
                return;
            }

            // breadcrumb에서 현재 위치를 누른 경우는 무시함
            if (index === this.state.depth.length - 1) {
                return;
            }

            const nextState = { ...this.state };
            const nextDepth = this.state.depth.slice(0, index + 1);

            this.setState({
                ...nextState,
                depth: nextDepth,
                nodes: cache[nextDepth[nextDepth.length - 1].id],
            });
        },
    });
    const root_node = document.querySelector(".Nodes");
    // ImageView 조율
    const imageView = new ImageView({
        $app,
        initialState: this.state.selectedNodeImage,
    });
    // Nodes 조율
    const nodes = new Nodes({
        root_node,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
        },
        onClick: async (node) => {
            try {
                if (node.type === "DIRECTORY") {
                    // DIRECTORY인 경우
                    if (cache[node.id]) {
                        this.setState({
                            ...this.state,
                            depth: [...this.state.depth, node],
                            isRoot: false,
                            nodes: nextNodes,
                        });
                    } else {
                        const nextNodes = await request(node.id);
                        this.setState({
                            ...this.state,
                            depth: [...this.state.depth, node],
                            isRoot: false,
                            nodes: nextNodes,
                        });
                        // cache update
                        cache[node.id] = nextNodes;
                    }
                } else if (node.type === "FILE") {
                    // FILE인 경우
                    this.setState({
                        ...this.state,
                        isRoot: true,
                        selectedFilePath: node.filePath,
                    });
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        onBackClick: async () => {
            try {
                // 이전 state 복사해 처리
                const nextState = { ...this.state };
                nextState.depth.pop();

                const prevNodeId = nextState.depth.length === 0 ? null : nextState.depth[nextState.depth.length - 1].id;
                console.log(prevNodeId);
                // Root로 온 경우 이므로, Root 처리
                if (prevNodeId === null) {
                    const rootNodes = await request();
                    this.setState({
                        ...nextState,
                        isRoot: true,
                        nodes: cache.rootNodes,
                    });
                } else {
                    const prevNodes = await request(prevNodeId);
                    this.setState({
                        ...nextNodes,
                        isRoot: false,
                        nodes: cache[prevNodes],
                    });
                }
            } catch (err) {
                throw new Error(err);
            }
        },
    });

    this.setState = (nextState) => {
        this.state = nextState;
        breadcrumb.setState(this.state.depth);
        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
        });
        imageView.setState(this.state.selectedFilePath);
        loading.setState(this.state.isLoading);
    };

    const init = async () => {
        this.setState({
            ...this.state,
            isLoading: true,
        });
        try {
            const rootNodes = await request();
            this.setState({
                ...this.state,
                isRoot: true,
                isLoading: false,
                nodes: rootNodes,
            });
            // 캐시에 추가
            cache.root = rootNodes;
        } catch (err) {
            throw new Error(err);
        } finally {
            this.setState({
                ...this.state,
                isLoading: false,
            });
        }
    };
    init();
}
