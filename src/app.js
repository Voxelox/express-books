import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import borrowingRoutes from './routes/borrowingRoutes.js';
import memberRoutes from './routes/memberRoutes.js';
// import { Book } from './models/book.js';
// import { Member } from './models/member.js';
// import { Borrowing } from './models/borrowing.js';

// Borrowing.belongsTo(Book, { foreignKey: 'book_id' });
// Book.hasMany(Borrowing, { foreignKey: 'book_id' });

// Borrowing.belongsTo(Member, { foreignKey: 'member_id' });
// Member.hasMany(Borrowing, { foreignKey: 'member_id' });

const app = express();

app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/borrowings', borrowingRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
