import { Book } from '../models/book.js';
import { Member } from '../models/member.js';
import { Borrowing } from '../models/borrowing.js';

await Book.sync();
await Member.sync();
await Borrowing.sync();

const bookResult = await Book.bulkCreate([
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published_year: 1925, stock: 5, isbn: '9780743273565' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', published_year: 1960, stock: 3, isbn: '9780446310789' },
  { title: '1984', author: 'George Orwell', published_year: 1949, stock: 4, isbn: '9780451524935' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', published_year: 1813, stock: 6, isbn: '9780141439518' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', published_year: 1951, stock: 3, isbn: '9780316769488' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', published_year: 1937, stock: 7, isbn: '9780547928227' },
  { title: 'The Da Vinci Code', author: 'Dan Brown', published_year: 2003, stock: 4, isbn: '9780307474278' },
  { title: 'The Alchemist', author: 'Paulo Coelho', published_year: 1988, stock: 5, isbn: '9780062315007' },
  { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', published_year: 1943, stock: 8, isbn: '9780156012195' },
  { title: 'Brave New World', author: 'Aldous Huxley', published_year: 1932, stock: 4, isbn: '9780060850524' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', published_year: 1954, stock: 6, isbn: '9780618640157' },
  { title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', published_year: 1997, stock: 7, isbn: '9780590353427' },
  { title: 'The Chronicles of Narnia', author: 'C.S. Lewis', published_year: 1950, stock: 5, isbn: '9780066238501' },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', published_year: 1967, stock: 3, isbn: '9780060883287' },
  { title: 'The Hunger Games', author: 'Suzanne Collins', published_year: 2008, stock: 6, isbn: '9780439023481' },
  { title: 'The Road', author: 'Cormac McCarthy', published_year: 2006, stock: 4, isbn: '9780307387899' },
  { title: 'The Kite Runner', author: 'Khaled Hosseini', published_year: 2003, stock: 5, isbn: '9781594631931' },
  { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', published_year: 2005, stock: 4, isbn: '9780307949486' },
  { title: 'The Book Thief', author: 'Markus Zusak', published_year: 2005, stock: 6, isbn: '9780375842207' },
  { title: 'Life of Pi', author: 'Yann Martel', published_year: 2001, stock: 5, isbn: '9780156027328' }
]);

const memberResult = await Member.bulkCreate([
  { name: 'John Doe', email: 'john.doe@email.com', phone: '081234567890', address: '123 Main St, City' },
  { name: 'Jane Smith', email: 'jane.smith@email.com', phone: '081234567891', address: '456 Oak Ave, Town' },
  { name: 'Robert Johnson', email: 'robert.j@email.com', phone: '081234567892', address: '789 Pine Rd, Village' },
  { name: 'Mary Williams', email: 'mary.w@email.com', phone: '081234567893', address: '321 Elm St, Borough' },
  { name: 'Michael Brown', email: 'michael.b@email.com', phone: '081234567894', address: '654 Maple Dr, District' },
  { name: 'Sarah Davis', email: 'sarah.d@email.com', phone: '081234567895', address: '987 Cedar Ln, County' },
  { name: 'James Wilson', email: 'james.w@email.com', phone: '081234567896', address: '147 Birch Ave, State' },
  { name: 'Emily Taylor', email: 'emily.t@email.com', phone: '081234567897', address: '258 Spruce St, Province' },
  { name: 'David Anderson', email: 'david.a@email.com', phone: '081234567898', address: '369 Ash Rd, Territory' },
  { name: 'Lisa Thomas', email: 'lisa.t@email.com', phone: '081234567899', address: '741 Walnut Ct, Region' },
  { name: 'Kevin Martin', email: 'kevin.m@email.com', phone: '081234567800', address: '852 Cherry Ln, Area' },
  { name: 'Jennifer White', email: 'jennifer.w@email.com', phone: '081234567801', address: '963 Palm Ave, Zone' },
  { name: 'Christopher Lee', email: 'chris.l@email.com', phone: '081234567802', address: '159 Beach Rd, Sector' },
  { name: 'Amanda Clark', email: 'amanda.c@email.com', phone: '081234567803', address: '357 Coast St, District' },
  { name: 'Daniel Martinez', email: 'daniel.m@email.com', phone: '081234567804', address: '468 River Dr, County' },
  { name: 'Michelle Garcia', email: 'michelle.g@email.com', phone: '081234567805', address: '789 Lake Ave, State' },
  { name: 'Andrew Robinson', email: 'andrew.r@email.com', phone: '081234567806', address: '951 Ocean Blvd, Province' },
  { name: 'Patricia Rodriguez', email: 'patricia.r@email.com', phone: '081234567807', address: '753 Bay St, Territory' },
  { name: 'Joseph Hall', email: 'joseph.h@email.com', phone: '081234567808', address: '246 Harbor Rd, Region' },
  { name: 'Nicole King', email: 'nicole.k@email.com', phone: '081234567809', address: '135 Port Ave, Area' }
]);

await Borrowing.bulkCreate([
  { book_id: bookResult[0].id, member_id: memberResult[0].id, borrow_date: '2024-11-21', return_date: '2024-11-28', status: 'RETURNED' },
  { book_id: bookResult[1].id, member_id: memberResult[1].id, borrow_date: '2024-11-22', return_date: '2024-11-29', status: 'RETURNED' },
  { book_id: bookResult[2].id, member_id: memberResult[2].id, borrow_date: '2024-11-23', return_date: '2024-11-30', status: 'RETURNED' },
  { book_id: bookResult[3].id, member_id: memberResult[3].id, borrow_date: '2024-11-24', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[4].id, member_id: memberResult[4].id, borrow_date: '2024-11-25', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[5].id, member_id: memberResult[5].id, borrow_date: '2024-11-26', return_date: '2024-12-03', status: 'RETURNED' },
  { book_id: bookResult[6].id, member_id: memberResult[6].id, borrow_date: '2024-11-27', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[7].id, member_id: memberResult[7].id, borrow_date: '2024-11-28', return_date: '2024-12-05', status: 'RETURNED' },
  { book_id: bookResult[8].id, member_id: memberResult[8].id, borrow_date: '2024-11-29', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[9].id, member_id: memberResult[9].id, borrow_date: '2024-11-30', return_date: '2024-12-07', status: 'RETURNED' },
  { book_id: bookResult[10].id, member_id: memberResult[10].id, borrow_date: '2024-12-01', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[11].id, member_id: memberResult[11].id, borrow_date: '2024-12-02', return_date: '2024-12-09', status: 'RETURNED' },
  { book_id: bookResult[12].id, member_id: memberResult[12].id, borrow_date: '2024-12-03', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[13].id, member_id: memberResult[13].id, borrow_date: '2024-12-04', return_date: '2024-12-11', status: 'RETURNED' },
  { book_id: bookResult[14].id, member_id: memberResult[14].id, borrow_date: '2024-12-05', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[15].id, member_id: memberResult[15].id, borrow_date: '2024-12-06', return_date: '2024-12-13', status: 'RETURNED' },
  { book_id: bookResult[16].id, member_id: memberResult[16].id, borrow_date: '2024-12-07', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[17].id, member_id: memberResult[17].id, borrow_date: '2024-12-08', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[18].id, member_id: memberResult[18].id, borrow_date: '2024-12-09', return_date: null, status: 'BORROWED' },
  { book_id: bookResult[19].id, member_id: memberResult[19].id, borrow_date: '2024-12-10', return_date: '2024-12-17', status: 'RETURNED' }
]);
