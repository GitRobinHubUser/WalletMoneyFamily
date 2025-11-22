const datos = [
  { fecha: '2025-11-01', tipo: 'Ingreso', titulo: 'Salario', monto: 2000000 },
  { fecha: '2025-11-02', tipo: 'Gasto', titulo: 'Supermercado', monto: 300000 },
  { fecha: '2025-11-03', tipo: 'Gasto', titulo: 'Transporte', monto: 50000 }
];

const tbody = document.getElementById('tabla-reportes');
datos.forEach(d => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${d.fecha}</td>
    <td>${d.tipo}</td>
    <td>${d.titulo}</td>
    <td>$${d.monto.toLocaleString()}</td>
  `;
  tbody.appendChild(tr);
});