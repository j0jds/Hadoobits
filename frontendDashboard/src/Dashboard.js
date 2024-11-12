import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
} from "recharts";
import tasks from "./mockData";
import "./styles.css"; // Import the CSS file
import Layout from "./Layout.js"; 


const Dashboard = () => {
  const [charts, setCharts] = useState([]);
  const [chartType, setChartType] = useState("Pie");
  const [filterType, setFilterType] = useState("type");

  const aggregateData = (filter) => {
    const taskData = tasks.reduce((acc, task) => {
      const key = filter === "type" ? task.type : task.difficulty;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return {
      pieData: Object.entries(taskData).map(([key, value]) => ({
        name: key,
        value,
      })),
      barData: Object.entries(taskData).map(([key, value]) => ({
        name: key,
        tasks: value,
      })),
      lineData: Object.entries(taskData).map(([key, value]) => ({
        name: key,
        uv: value,
      })),
      areaData: Object.entries(taskData).map(([key, value]) => ({
        name: key,
        uv: value,
      })),
      radarData: Object.entries(taskData).map(([key, value]) => ({
        subject: key,
        A: value,
      })),
    };
  };

  const addChart = () => {
    const newChart = {
      type: chartType,
      filter: filterType,
      data: aggregateData(filterType),
    };
    setCharts([...charts, newChart]);
  };

  const removeChart = (index) => {
    setCharts(charts.filter((_, i) => i !== index));
  };

  const renderDot = (props) => {
    const { cx, cy, value } = props;
    return (
      <circle cx={cx} cy={cy} r={6} fill={value > 5 ? "#ff4081" : "#3f51b5"} />
    ); // Change color based on value or any other logic
  };

  return (
    <Layout> {/* conteúdo com o Layout */}
    <Container id="dashboard-container">
      <Typography variant="h4" gutterBottom>
        Task Dashboard
      </Typography>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel className="input-label">Chart Type</InputLabel>
        <Select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          label="Chart Type"
          className="chart-select"
        >
          <MenuItem value="Pie">Pie Chart</MenuItem>
          <MenuItem value="Bar">Bar Chart</MenuItem>
          <MenuItem value="Line">Line Chart</MenuItem>
          <MenuItem value="Area">Area Chart</MenuItem>
          <MenuItem value="Radar">Radar Chart</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel className="input-label">Filter By</InputLabel>
        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          label="Filter By"
          className="filter-select"
        >
          <MenuItem value="type">Task Type</MenuItem>
          <MenuItem value="difficulty">Task Difficulty</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={addChart}
        className="add-chart-button"
      >
        Add Chart
      </Button>

      <Grid container spacing={3}>
        {charts.map((chart, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} className="chart-paper">
              <Typography variant="h6">
                {chart.type} Distribution by{" "}
                {chart.filter === "type" ? "Task Type" : "Task Difficulty"}
              </Typography>
              {chart.type === "Pie" ? (
                <PieChart width={300} height={300}>
                  <Pie
                    data={chart.data.pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={{ fill: "white" }}
                  >
                    {chart.data.pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          ["#3f51b5", "#9c27b0", "#ff4081", "#00e5ff"][
                            index % 4
                          ]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              ) : chart.type === "Bar" ? (
                <BarChart width={300} height={300} data={chart.data.barData}>
                  <XAxis dataKey="name" stroke="white" />
                  <YAxis stroke="white" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="tasks"
                    fill="#3f51b5"
                    label={{ fill: "white" }}
                  />
                </BarChart>
              ) : chart.type === "Line" ? (
                <LineChart width={300} height={300} data={chart.data.lineData}>
                  <XAxis dataKey="name" stroke="white" />
                  <YAxis stroke="white" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#3f51b5"
                    label={{ fill: "white" }}
                    dot={renderDot} // Use custom dot rendering
                  />
                </LineChart>
              ) : chart.type === "Area" ? (
                <AreaChart width={300} height={300} data={chart.data.areaData}>
                  <XAxis dataKey="name" stroke="white" />
                  <YAxis stroke="white" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    fill="#3f51b5"
                    label={{ fill: "white" }}
                  />
                </AreaChart>
              ) : chart.type === "Radar" ? (
                <RadialBarChart
                  width={300}
                  height={300}
                  innerRadius="10%"
                  outerRadius="80%"
                  data={chart.data.radarData}
                >
                  <RadialBar
                    minAngle={15}
                    label={{ fill: "white", position: "inside" }}
                    background
                    dataKey="A"
                  >
                    {chart.data.radarData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          ["#3f51b5", "#9c27b0", "#ff4081", "#00e5ff"][
                            index % 4
                          ]
                        }
                      />
                    ))}
                  </RadialBar>
                  <Tooltip />
                </RadialBarChart>
              ) : null}
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeChart(index)}
                className="remove-chart-button"
              >
                Remove Chart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Layout> 
  );
};

export default Dashboard;
