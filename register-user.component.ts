.page {
  width: min(1100px, 92vw);
  margin: 22px auto 40px;
}

.title {
  margin: 0 0 14px;
  color: #0b1b33;
  font-size: 1.5rem;
}

.card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  padding: 16px;
}

.filters {
  display: grid;
  grid-template-columns: 1fr 220px auto;
  gap: 14px;
  align-items: end;
  margin-bottom: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 700;
  color: #344054;
}

input, select {
  height: 42px;
  border-radius: 10px;
  border: 1px solid #d0d5dd;
  padding: 0 12px;
  outline: none;
  background: #f8fafc;
}

input:focus, select:focus {
  border-color: #1f5eff;
  box-shadow: 0 0 0 4px rgba(31, 94, 255, 0.12);
  background: #ffffff;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.btn {
  border: 1px solid transparent;
  background: #e9efff;
  color: #0b1b33;
  font-weight: 800;
  border-radius: 10px;
  height: 42px;
  padding: 0 16px;
  cursor: pointer;
  transition: filter 0.15s ease, transform 0.08s ease;
}

.btn:hover {
  filter: brightness(1.02);
}

.btn:active {
  transform: translateY(1px);
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.table-wrap {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #f2f4f7;
}

th, td {
  padding: 12px 14px;
  border-bottom: 1px solid #eef2f6;
  text-align: left;
  font-size: 0.95rem;
}

th {
  color: #475467;
  font-weight: 900;
}

.actions-col {
  width: 310px;
}

.price {
  font-weight: 900;
}

tr.vencido {
  background: #fff5f5;
}

.name {
  font-weight: 900;
  color: #0b1b33;
}

.badge {
  margin-left: 10px;
  font-size: 0.78rem;
  font-weight: 900;
  padding: 6px 10px;
  border-radius: 999px;
  background: #fee4e2;
  color: #b42318;
  border: 1px solid #fda4af;
}

.table .btn {
  height: 34px;
  padding: 0 12px;
  margin-right: 8px;
  border-radius: 10px;
  font-size: 0.9rem;
  background: #eef2ff;
}

.btn-details {
  background: #eef2ff;
  color: #3730a3;
}

.btn-edit {
  background: #dbeafe;
  color: #1d4ed8;
}

.btn-delete {
  background: #fee2e2;
  color: #b91c1c;
}

.empty {
  padding: 18px;
  color: #667085;
  text-align: center;
}

.alert {
  margin: 14px 0;
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 900;
}

.alert-error {
  background: #fee4e2;
  border: 1px solid #fda4af;
  color: #b42318;
}

.alert-success {
  background: #dcfce7;
  border: 1px solid #86efac;
  color: #166534;
}

@media (max-width: 900px) {
  .filters {
    grid-template-columns: 1fr;
  }

  .actions {
    justify-content: flex-start;
  }

  .actions-col {
    width: auto;
  }

  .table .btn {
    margin-right: 6px;
    margin-bottom: 6px;
  }
}

