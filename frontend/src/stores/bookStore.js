import { defineStore } from 'pinia';
import { BookService } from '@/services/BookService';

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        books: [],
        currentBook: null,
        pagination: {},
        isLoading: false,
        error: null,
    }),

    actions: {
        async fetchBooks() {
            this.isLoading = true;
            this.error = null;
            try {
                // Gọi service để lấy dữ sách
                const response = await BookService.getAllBooks();
                this.books = response.data.data; 
            } catch (err) {
                this.error = 'Không thể tải danh sách sách.';
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },

        async deleteBook(id) {
            this.isLoading = true;
            try {
                await BookService.deleteBook(id);
                // Sau khi xóa thành công, loại bỏ sách khỏi state cục bộ
                this.books = this.books.filter(book => book.id !== id);
                return true;
            } catch (err) {
                this.error = 'Không thể xóa sách.';
                console.error(err);
                return false;
            } finally {
                this.isLoading = false;
            }
        },
        async fetchBooks(page = 1) {
            // ... (logic fetchBooks)
        },
        
        async fetchBook(id) {
            // ... (logic fetchBook)
        },

        // 
        // VẤN ĐỀ NẰM Ở ĐÂY:
        // Đảm bảo hàm createBook tồn tại, là async, và nằm trong 'actions'
        //
        async createBook(bookData) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await BookService.createBook(bookData);
                // Thêm sách mới vào đầu danh sách (hoặc làm mới toàn bộ)
                this.books.unshift(response.data.data);
                return true; // Báo thành công
            } catch (err) {
                this.error = 'Lỗi: Không thể tạo sách.';
                console.error(err);
                return false; // Báo thất bại
            } finally {
                this.isLoading = false;
            }
        },

        async updateBook(id, bookData) {
            // ... (logic updateBook)
        },

        async deleteBook(id) {
            // ... (logic deleteBook)
        }
    
    }
});