import React, { useState } from "react";
import { Table, Space, Button, Modal } from "antd";
import { useHistory } from "react-router-dom";

import "./dashboard-table.styles.css";


const DashBoardTable = ({solicitudes}) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const columns = [
    {
      title: "Nro",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Direccion",
      dataIndex: "location",
    },
    {
      title: "Descripcion",
      dataIndex: "descripcion",
    },

    {
      title: "Estado",
      dataIndex: "estado",
    },
    {
      title: "Tipo",
      dataIndex: "clasificacion",
    },
    {
      title: "Polaridad",
      dataIndex: "sentimentalismo",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button className='btnVerMas' onClick={() => history.push(`/info-solicitud/${record.id}`)}>
            Ver Mas
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={solicitudes} columns={columns} loading={solicitudes.length === 0} />
      <Modal
        title="Informacion de solicitud"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      ></Modal>
      <Button style={{ display:"block", top: "-50px", borderColor: "#3A9FF1" }}>
        <a href="www.google.com">
          Reporte
        </a>
      </Button>
    </>
  );
};

export default DashBoardTable;
