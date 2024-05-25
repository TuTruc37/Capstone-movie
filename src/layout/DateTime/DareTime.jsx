import React from 'react'

const handleDateChange = (event) => {
    // Xử lý sự kiện thay đổi ở đây
    // Bạn có thể truy cập giá trị ngày mới từ event.target.value
    console.log('Ngày mới:', event.target.value); // Ví dụ ghi nhật ký
};
const DareTime = () => {
    const [formattedDate, setFormattedDate] = useState(
        // Sử dụng hàm định dạng ngày thích hợp ở đây
        item.ngayKhoiChieu ? new Date(item.ngayKhoiChieu).toLocaleDateString('vi-VN') : ''
    );

    return (
        <div>
            <input
                type="date"
                value={formattedDate} // Hiển thị ngày đã định dạng trong input
                onChange={handleDateChange} // Cập nhật trạng thái khi thay đổi
            />
            <p>{formattedDate}</p>
        </div>
    );
}

export default DareTime