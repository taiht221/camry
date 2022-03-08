export function initGrand(form) {
  if (!form) return
  let LOCATION = {
    'An Giang': [
      {
        value: '(Cần Thơ) ĐL Cần Thơ CN An Giang',
      },
    ],
    'Ba Ria Vung Tau': [
      {
        value: '(BRVT) ĐL Vũng Tàu',
      },
    ],
    'Bac Giang': [
      {
        value: '(Bắc Giang) ĐL Bắc Giang',
      },
    ],
    'Bac Ninh': [
      {
        value: '(Bắc Ninh) ĐL Bắc Ninh',
      },
      {
        value: '(Bắc Ninh) ĐL IDMC Từ Sơn',
      },
    ],
    'Ben Tre': [
      {
        value: '(Bến Tre) ĐL Toyota Bến Tre',
      },
    ],
    'Binh Duong': [
      {
        value: '(Bình Dương) ĐL Biên Hòa CN Bình Dương',
      },
      {
        value: '(Bình Dương) ĐL Bình Dương',
      },
    ],
    'Binh Dinh': [
      {
        value: '(Bình Định) ĐL Bình Định',
      },
    ],
    'Binh Thuan': [
      {
        value: '(Bình Thuận) ĐL Bình Thuận',
      },
    ],
    'Can Tho': [
      {
        value: '(Cần Thơ) ĐL Cần Thơ',
      },
      {
        value: '(Cần Thơ) ĐL Ninh Kiều',
      },
    ],
    'Dak Lak': [
      {
        value: '(Dak Lak) ĐL Buôn Mê Thuột',
      },
      {
        value: '(Dak Lak) ĐL Đắk Lắk',
      },
    ],
    'Da Nang': [
      {
        value: '(Đà Nẵng) ĐL Đà Nẵng',
      },
      {
        value: '(Đà Nẵng) ĐL Okayama Đà Nẵng',
      },
    ],
    'Dong Nai': [
      {
        value: '(Đồng Nai) ĐL Biên Hòa',
      },
      {
        value: '(Đồng Nai) ĐL Biên Hòa CN Đồng Nai',
      },
    ],
    'Gia Lai': [
      {
        value: '(Gia Lai) ĐL Gia Lai',
      },
    ],
    'Ha Noi': [
      {
        value: '(HN) Q.Hoàn Kiếm - ĐL Hoàn Kiếm',
      },
      {
        value: '(HN) Q.Hoàng Mai - ĐL Giải Phóng',
      },
      {
        value: '(HN) Q.Hoàng Mai - ĐL Giải Phóng CN Pháp Vân',
      },
      {
        value: '(HN) Q.Hà Đông - ĐL Hà Đông',
      },
      {
        value: '(Hà Nội) ĐL IDMC Hoài Đức',
      },
      {
        value: '(HN) Q.Long Biên - ĐL Long Biên',
      },
      {
        value: '(HN) Q.Nam Từ Liêm - ĐL Mỹ Đình',
      },
      {
        value: '(HN) Q. Nam Từ Liêm - ĐL Thái Hòa Từ Liêm',
      },
      {
        value: '(HN) Q.Cầu Giấy - ĐL Thăng Long',
      },
      {
        value: '(HN) Q.Thanh Xuân - ĐL Thanh Xuân',
      },
    ],
    'Ha Tinh': [
      {
        value: '(Hà Tĩnh) ĐL Hà Tĩnh',
      },
    ],
    'Hai Duong': [
      {
        value: '(Hải Dương) ĐL Hải Dương',
      },
    ],
    'Hoa Binh': [
      {
        value: '(Hòa Bình) ĐL TNG Hòa Bình',
      },
    ],
    'Hung Yen': [
      {
        value: '(Hưng Yên) ĐL Hưng Yên',
      },
    ],
    'Hai Phong': [
      {
        value: '(Hải Phòng) ĐL Nankai Hải Phòng',
      },
      {
        value: '(Hải Phòng) ĐL Hải Phòng',
      },
    ],
    'Ho Chi Minh': [
      {
        value: '(HCM) H.Bình Chánh - ĐL Asta Fukushima',
      },
      {
        value: '(HCM) Q.12 - ĐL An Sương',
      },
      {
        value: '(HCM) Q.12 - ĐL An Sương CN Trường Chinh',
      },
      {
        value: '(HCM) Q.1 - ĐL Bến Thành',
      },
      {
        value: '(HCM) Q.Bình Tân - ĐL Bến Thành',
      },
      {
        value: '(HCM) Q.1 - ĐL Bến Thành CN Chương Dương',
      },
      {
        value: '(HCM) Q.2 - ĐL Đông Sài Gòn',
      },
      {
        value: '(HCM) Q.GV - ĐL Đông Sài Gòn',
      },
      {
        value: '(HCM) Q.GV - ĐL Đông Sài Gòn - CN Nguyễn Văn Lương',
      },
      {
        value: '(HCM) Q.Bình Thạnh - ĐL Hiroshima Tân Cảng',
      },
      {
        value: '(HCM) Q.Thủ Đức - ĐL Hiroshima Long Phước',
      },
      {
        value: '(HCM) Q.Bình Tân - ĐL SAMCO CN Tân Tạo',
      },
      {
        value: '(HCM) Q.Tân Bình - ĐL Lý Thường Kiệt',
      },
      {
        value: '(HCM) Q.Tân Phú - ĐL Lý Thường Kiệt',
      },
      {
        value: '(HCM) Q.7 - ĐL Phú Mỹ Hưng (Tân Phong)',
      },
      {
        value: '(HCM) Q.7 - ĐL Phú Mỹ Hưng',
      },
      {
        value: '(HCM) Q.6 - ĐL Tsusho Saigon Motor Service',
      },
      {
        value: '(HCM) Q. Thủ Đức - ĐL Đông Sài Gòn - CN Thủ Đức',
      },
      {
        value: '(HCM) Q.9 - ĐL Đông Sài Gòn - CN Quận 9',
      },
    ],
    'Khanh Hoa': [
      {
        value: '(Khánh Hoà) ĐL Nha Trang',
      },
    ],
    'Phu Yen': [
      {
        value: '(Phú Yên) ĐL Phú Yên',
      },
    ],
    'Long An': [
      {
        value: '(Long An) ĐL Long An',
      },
    ],
    'Nam Dinh': [
      {
        value: '(Nam Định) ĐL Giải Phóng',
      },
    ],
    'Nghe An': [
      {
        value: '(Nghệ An) ĐL Sông Lam',
      },
      {
        value: '(Nghệ An) ĐL Vinh',
      },
    ],
    'Phu Tho': [
      {
        value: '(Phú Thọ) ĐL IDMC Phú Thọ',
      },
    ],
    'Lao Cai': [
      {
        value: '(Lào Cai) ĐL Lao Cai',
      },
    ],
    'Quang Binh': [
      {
        value: '(Quảng Bình) ĐL Quảng Bình',
      },
    ],
    'Quang Ninh': [
      {
        value: '(Quảng Ninh) ĐL Cẩm Phả',
      },
      {
        value: '(Quảng Ninh) ĐL Quảng Ninh',
      },
    ],
    'Son La': [
      {
        value: '(Sơn La) ĐL Tây Bắc',
      },
    ],
    'Tay Ninh': [
      {
        value: '(Tây Ninh) ĐL Lý Thường Kiệt',
      },
    ],
    'Tien Giang': [
      {
        value: '(Tiền Giang) ĐL Tiền Giang',
      },
    ],
    'Thai Nguyen': [
      {
        value: '(Thái Nguyên) ĐL Thái Nguyên',
      },
    ],
    'Thai Binh': [
      {
        value: '(Thái Bình) ĐL Thái Bình',
      },
    ],
    'Thanh Hoa': [
      {
        value: '(Thanh Hoá) ĐL Doanh Thu',
      },
      {
        value: '(Thanh Hoá) ĐL Thanh Hoá',
      },
    ],
    'Thua Thien Hue': [
      {
        value: '(Thừa Thiên Huế) ĐL Huế',
      },
    ],
    'Vinh Phuc': [
      {
        value: '(Vĩnh Phúc) ĐL Toyota Hiroshima Vĩnh Phúc',
      },
    ],
    'Vinh Long': [
      {
        value: '(Vĩnh Long) ĐL Toyota Thập Nhất Phong Vĩnh Long',
      },
    ],
    'Binh Phuoc': [
      {
        value: '(Bình Phước) ĐL Toyota Bình Phước',
      },
    ],
    'Ca Mau': [
      {
        value: '(Bình Phước) ĐL Toyota Cà Mau',
      },
    ],
    'Quang Tri': [
      {
        value: '(Quảng Trị) ĐL PGS Quảng Trị',
      },
    ],
  }
  let province = form.querySelector('.province')
  let retailer = form.querySelector('.retailer')
  //  Choose Province
  province.addEventListener('change', function (e) {
    let value = LOCATION[province.value]
    retailer.textContent = ''
    value.map((e) => {
      const option = document.createElement('option')
      option.value = e.value
      option.textContent = e.value
      retailer.append(option)
    })
    retailer.selectedIndex = 0
  })
}
