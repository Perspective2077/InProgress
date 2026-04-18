export default function canvas() {
    const canvas = document.getElementById('treeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let host = [
        {
            "file": { name: "asd", title: "whatever" },
            "folder": [
                {
                    "file1": { name: "asd", title: "whatever" },
                    "file2": { name: "asd", title: "whatever" },
                    "folder": [
                        {
                            "file1": { name: "asd", title: "whatever" },
                            "file2": { name: "asd", title: "whatever" },
                        }
                    ]
                }
            ]
        }
    ];

    // Configuration for the nested list look
    const config = {
        startX: 40,
        startY: 40,
        indent: 30,      // How far right to indent nested items
        lineHeight: 35,  // Vertical space between items
        boxW: 100,
        boxH: 26
    };

    // We use a tracker to constantly move down the Y-axis as we draw
    let currentY = config.startY;

    function drawNestedTree(data, depth) {
        // Handle the array wrapping
        const node = Array.isArray(data) ? data[0] : data;
        if (!node) return;

        let label = "Node";
        let children = [];

        // Parse your custom structure
        Object.keys(node).forEach(key => {
            const val = node[key];
            if (key === "folder" && Array.isArray(val)) {
                children = val;
            } else if (typeof val === 'object' && val !== null && val.name) {
                label = `${key}: ${val.name}`; 
            }
        });

        // Calculate X based on how deep we are in the tree
        const x = config.startX + (depth * config.indent);
        const y = currentY;

        // Draw Connector Line (L-shape from parent)
        if (depth > 0) {
            ctx.beginPath();
            ctx.strokeStyle = "#95a5a6";
            ctx.moveTo(x - config.indent + 10, y - config.lineHeight + config.boxH);
            ctx.lineTo(x - config.indent + 10, y + config.boxH / 2);
            ctx.lineTo(x, y + config.boxH / 2);
            ctx.stroke();
        }

        // Draw the Box
        ctx.fillStyle = children.length > 0 ? "#34495e" : "#3498db"; // Darker for folders
        ctx.beginPath();
        ctx.roundRect(x, y, config.boxW, config.boxH, 4);
        ctx.fill();

        // Draw Text
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px monospace";
        ctx.textAlign = "left";
        ctx.fillText(label, x + 10, y + 17);

        // Move the global Y down for the next item
        currentY += config.lineHeight;

        // Recursively draw children, increasing the depth by 1
        if (children.length > 0) {
            children.forEach(child => {
                drawNestedTree(child, depth + 1);
            });
        }
    }

    // Clear canvas and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNestedTree(host, 0);
}