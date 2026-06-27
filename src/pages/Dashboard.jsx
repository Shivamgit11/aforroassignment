// import VisitorChart from "../components/charts/VisitorChart";
// import RevenueChart from "../components/charts/RevenueChart";
// import SatisfactionChart from "../components/charts/SatisfactionChart";
// import TargetChart from "../components/charts/TargetChart";
// import SalesMap from "../components/charts/SalesMap";
// import VolumeChart from "../components/charts/VolumeChart";
// import TopProducts from "../components/charts/TopProducts";
// import DataTable from   "../components/charts/Table";

// const Dashboard = () => (
//   <div className="grid grid-cols-10">

//     {/* Row 1: Sales Summary + Visitor Insights */}
   
//       {/* Sales Summary */}
//       <div className="col-span-6"><SalesMap /></div>
//       <div className="col-span-4"><VisitorChart /></div>
     

      


//     {/* Row 2: Revenue + Satisfaction + Target */}
   
//       <div className="col-span-4"><RevenueChart />  </div>
//       <div className="col-span-3"><SatisfactionChart /> </div>
//      <div className="col-span-3"> <TargetChart /></div>
// <div className="col-span-4"> <TopProducts /> </div>
// <div className="col-span-3">  </div>
// <div className="col-span-3"><VolumeChart /></div>
// <div className="col-span-10"><DataTable /></div>
   
//   </div>
// );

// export default Dashboard;

import { useState, useCallback } from "react";

import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Handle,
  Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 150, y: 80 },
    data: { label: "Node 1" },
  },
  {
    id: "2",
    position: { x: 150, y: 250 },
    data: { label: "Node 2" },
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
  },
];

function CustomNode({ data }) {
  return (
    <div
      style={{
        padding: "14px 22px",

        background: "#ffffff",

        borderRadius: "14px",

        border: "1px solid #e8e8e8",

        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",

        fontSize: "14px",

        fontWeight: "600",

        color: "#1f2937",
      }}
    >
      <Handle type="target" position={Position.Top} />

      {data.label}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
const Dashboard = () => {
   const [nodes, setNodes] = useState(initialNodes);

  const [edges, setEdges] = useState(initialEdges);

  const [selectedNode, setSelectedNode] = useState(null);

  const addNewNode = async () => {
    const newNode = {
      id: `${nodes.length + 1}`,

      position: {
        x: Math.random() * 500,

        y: Math.random() * 400,
      },

      data: {
        label: `Node ${nodes.length + 1}`,
      },
    };

    setNodes((prev) => [...prev, newNode]);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "2131724e-da0b-4082-8d95-1aef7d57c6b3",
        name: "shivam umar",
        email: "shivamworking123@gmail.com",
        message: "new node Added",
        subject: `New Node  ${JSON.stringify(newNode)}`,
      }),
    });
    console.log(response)
  }

  const onNodesChange = useCallback(async (changes) => {
    setNodes((snapshot) => applyNodeChanges(changes, snapshot));
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "2131724e-da0b-4082-8d95-1aef7d57c6b3",
        name: "shivam umar",
        email: "shivamworking123@gmail.com",
        message: `Node Changes - ${JSON.stringify(changes)}`,
        subject: ` Node Changes`,
      }),
    });
    console.log(response)
  }, []);

  const onEdgesChange = useCallback(async (changes) => {
    setEdges((snapshot) => applyEdgeChanges(changes, snapshot));
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "2131724e-da0b-4082-8d95-1aef7d57c6b3",
        name: "shivam umar",
        email: "shivamworking123@gmail.com",
        message: `Edge Changes - ${JSON.stringify(changes)}`,
        subject: ` Edge Changes`,
      }),
    });
    console.log(response)
  }, []);

  const onConnect = useCallback(async (params) => {
    console.log(params, "line no 177");
    if(Number(params.target ) - Number(params.source) > 1){
      window.alert("Node should be connected between susequent manner")
      return
    }
    setEdges((snapshot) =>
      addEdge(
        {
          ...params,

          id: `${params.source}-${params.target}`,
        },

        snapshot,
      ),
    );
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "2131724e-da0b-4082-8d95-1aef7d57c6b3",
        name: "shivam umar",
        email: "shivamworking123@gmail.com",
        message: `Node Changes - ${JSON.stringify(`${params.source}-${params.target}`)}`,
        subject: ` Node Connect Update`,
      }),
    });
    console.log(response)
  }, []);

  const showJSON = async () => {
    console.log(
      JSON.stringify(
        {
          nodes,

          edges,
        },
        null,
        2,
      ),
    );
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "2131724e-da0b-4082-8d95-1aef7d57c6b3",
        name: "shivam umar",
        email: "shivamworking123@gmail.com",
        message: `Node Changes - ${JSON.stringify(
          {
            nodes,

            edges,
          },
          null,
          2,
        )}`,
        subject: ` Whole json `,
      }),
    });
    console.log(response)
  };
  return (
     <div
      style={{
        width: "100vw",

        height: "100vh",

        background: "#f8fafc",
      }}
    >
      {/* Header */}

      <div
        style={{
          // position: "absolute",

          // top: 20,

          // left: "50%",

          // transform: "translateX(-50%)",

          zIndex: 10,

          background: "#ffffff",

          padding: "14px 20px",

          borderRadius: "18px",

          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",

          display: "flex",

          gap: "12px",
        }}
      >
        <button onClick={addNewNode} style={primaryBtn}>
          + Add Node
        </button>

        <button onClick={showJSON} style={secondaryBtn}>
          Export
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(e, node) => setSelectedNode(node)}
        nodeTypes={{
          custom: CustomNode,
        }}
        fitView
      />

      {/* Right Panel */}

      {selectedNode && (
        <div
          style={{
            position: "absolute",

            right: 30,

            top: 30,

            width: 300,

            background: "#ffffff",

            borderRadius: "20px",

            padding: "25px",

            boxShadow: "0 20px 40px rgba(0,0,0,.12)",

            zIndex: 20,
          }}
        >
          <div
            style={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "20px",

                margin: 0,
              }}
            >
              Node Info
            </h2>

            <button onClick={() => setSelectedNode(null)} style={closeBtn}>
              ×
            </button>
          </div>

          <div
            style={{
              marginTop: 20,

              background: "#f8fafc",

              padding: 15,

              borderRadius: 14,
            }}
          >
            <p>
              <b>ID</b>

              <br />

              {selectedNode.id}
            </p>

            <p>
              <b>Name</b>

              <br />

              {selectedNode.data.label}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">form</div>
            <div className="col-span-1">Email</div>
            <div className="col-span-1">Other</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard

const primaryBtn = {
  background: "#111827",

  color: "#fff",

  border: "none",

  padding: "11px 18px",

  borderRadius: "12px",

  cursor: "pointer",

  fontWeight: "600",
};

const secondaryBtn = {
  background: "#ffffff",

  border: "1px solid #ddd",

  padding: "11px 18px",

  borderRadius: "12px",

  cursor: "pointer",

  fontWeight: "600",
};

const closeBtn = {
  border: "none",

  background: "#f3f4f6",

  height: 32,

  width: 32,

  borderRadius: "50%",

  cursor: "pointer",

  fontSize: 20,
};
