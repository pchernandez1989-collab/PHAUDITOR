import express from 'express';
import cors from 'cors';
import { supabase } from '../database/supabase.js';

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para leer inventario
app.get('/api/inventario', async (req, res) => {
  const { data, error } = await supabase.from('inventario').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Endpoint para agregar producto
app.post('/api/inventario', async (req, res) => {
  const { codigo, producto, lote, vencimiento, cantidad } = req.body;
  const { data, error } = await supabase
    .from('inventario')
    .insert([{ codigo, producto, lote, vencimiento, cantidad }]);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

