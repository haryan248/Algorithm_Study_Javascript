// Nodes.js

export default function Nodes({ root_node, initialState, onClick, onBackClick }) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "Nodes";

    root_node.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.onBackClick = onBackClick;
    this.onClick = onClick;

    this.render = () => {
        if (this.state.nodes) {
            const nodesTemplate = this.state.nodes
                .map((node) => {
                    const iconPath = node.type === "FILE" ? "./assets/file.png" : "./assets/directory.png";
                    return `
                    
                    <div class="Node" data-node-id="${node.id}">
                        <img src="${iconPath}" />
                        <div>${node.name}</div>
                    </div>
                `;
                })
                .join("");

            // Root directory 랜더링이 아닌 경우 뒤로가기를 랜더링
            console.log(this.state.isRoot);
            this.$target.innerHTML = !this.state.isRoot
                ? `
             <div class="Node">
                 <img src="assets/prev.png">
             </div>
             ${nodesTemplate}
         `
                : nodesTemplate;
        }

        // 랜더링된 이후 클릭 가능한 모든 요소에 click이벤트 걸기
        this.$target.addEventListener("click", (e) => {
            // closest를 이용하면 현재 클릭한 요소와 제일 인접한 요소를 가져올 수 있음
            const $node = e.target.closest(".Node");
            if ($node) {
                const { nodeId } = $node.dataset;

                if (!nodeId) {
                    this.onBackClick();
                    return;
                }
                const selectedNode = this.state.nodes.find((node) => node.id === nodeId);
                if (selectedNode) {
                    this.onClick(selectedNode);
                    return;
                }
            }
        });
    };

    this.render();
}
