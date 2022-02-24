export function initGrand(form) {
  let LOCATION = {
    'An Giang': [
      {
        value: '(Cần Thơ) ĐL Cần Thơ_#TCTC',
      },
    ],
    'Ba Ria Vung Tau': [
      {
        value: '(BRVT) ĐL Vũng Tàu_#TVT',
      },
    ],
    'Bac Giang': [
      {
        value: '(Bắc Giang) ĐL Bắc Giang_#TBG',
      },
    ],
    'Bac Ninh': [
      {
        value: '(Bắc Ninh) ĐL Bắc Ninh_#TBN',
      },
      {
        value: '(Bắc Ninh) ĐL Từ Sơn_#TTS',
      },
    ],
    'Ben Tre': [
      {
        value: '(Bến Tre) ĐL Toyota Bến Tre_#TBT',
      },
    ],
    'Binh Duong': [
      {
        value: '(Bình Dương) ĐL Biên Hoà CN Bình Dương_#TBH-BD',
      },
      {
        value: '(Bình Dương) ĐL Bình Dương_#TBD',
      },
    ],
    'Binh Dinh': [
      {
        value: '(Bình Định) ĐL Bình Định_#TBI',
      },
    ],
    'Binh Thuan': [
      {
        value: '(Bình Thuận) ĐL Bình Thuận_#TBT',
      },
    ],
    'Can Tho': [
      {
        value: '(Cần Thơ) ĐL Cần Thơ_#TCTC',
      },
      {
        value: '(Cần Thơ) ĐL Ninh Kiều_#TNK',
      },
    ],
    'Dak Lak': [
      {
        value: '(Dak Lak) - ĐL Buôn Mê Thuột_#TBMT',
      },
      {
        value: '(Dak Lak) ĐL Đắk Lắk_TDK',
      },
    ],
    'Da Nang': [
      {
        value: '(Đà Nẵng) ĐL Đà Nẵng_#TDN',
      },
      {
        value: '(Đà Nẵng) Okayama Đà Nẵng_#TODN',
      },
    ],
    'Dong Nai': [
      {
        value: '(Đồng Nai) ĐL Biên Hòa_#TBH',
      },
      {
        value: '(Đồng Nai) ĐL Biên Hòa CN Đồng Nai_#TBH',
      },
    ],
    'Gia Lai': [
      {
        value: '(Gia Lai) ĐL Gia Lai_#TGL',
      },
    ],
    'Ha Noi': [
      {
        value: '(HN) Q.Hoàn Kiếm - ĐL Hoàn Kiếm_#THKC',
      },
      {
        value: '(HN) Q.Hoàng Mai - ĐL Giải Phóng_#TGP',
      },
      {
        value: '(HN) Q.Hoàng Mai - ĐL Giải Phóng CN Pháp Vân_#TGP_PV',
      },
      {
        value: '(HN) Q.Hà Đông - ĐL Hà Đông_#THD',
      },
      {
        value: '(Hà Nội) ĐL IDMC Hoài Đức_#TIHD',
      },
      {
        value: '(HN) Q.Long Biên - ĐL Long Biên_#TLB',
      },
      {
        value: '(HN) Q.Nam Từ Liêm - ĐL Mỹ Đình_#TMD',
      },
      {
        value: '(HN) Q. Nam Từ Liêm - ĐL Thái Hòa Từ Liêm_#THTL',
      },
      {
        value: '(HN) Q. Cầu Giấy - ĐL Thăng Long_#TTL',
      },
      {
        value: '(HN) Q.Thanh Xuân - ĐL Thanh Xuân_#TTX',
      },
    ],
    'Ha Tinh': [
      {
        value: '(Hà Tĩnh) ĐL Hà Tĩnh_#THT',
      },
    ],
    'Hai Duong': [
      {
        value: '(Hải Dương) ĐL Hải Dương_#THA',
      },
    ],
    'Hoa Binh': [
      {
        value: '(Hòa Bình) ĐL TNG Hòa Bình_#THD-HB',
      },
    ],
    'Hung Yen': [
      {
        value: '(Hưng Yên) ĐL Hưng Yên_THY',
      },
    ],
    'Hai Phong': [
      {
        value: '(Hải Phòng) ĐL Nankai Hải Phòng_#TNHP',
      },
      {
        value: '(Hải Phòng) ĐL Hải Phòng_#THP',
      },
    ],
    'Ho Chi Minh': [
      {
        value: '(HCM) H.Bình Chánh - ĐL Asta Fukushima_#TAF',
      },
      {
        value: '(HCM) Q.12 - ĐL An Sương_#TAS',
      },
      {
        value: '(HCM) Q.12 - ĐL An Sương CN Trường Chinh_#TAS',
      },
      {
        value: '(HCM) Q.1 - ĐL Bến Thành_#TBTC',
      },
      {
        value: '(HCM) Q.Bình Tân - ĐL Bến Thành_#TBTC-BT',
      },
      {
        value: '(HCM) Q.1 - ĐL Bến Thành CN Chương Dương_#TBTC-CD',
      },
      {
        value: '(HCM) Q.2 - ĐL Đông Sài Gòn_#TESC',
      },
      {
        value: '(HCM) Q.GV - ĐL Đông Sài Gòn_#TESC',
      },
      {
        value: '(HCM) Q.GV - ĐL Đông Sài Gòn - CN Nguyễn Văn Lương_#TESC',
      },
      {
        value: '(HCM) Q.Bình Thạnh - ĐL Hiroshima Tân Cảng_#THTC',
      },
      {
        value: '(HCM) Q.Thủ Đức - ĐL Hiroshima Long Phước',
      },
      {
        value: '(HCM) Q.Bình Tân - ĐL SAMCO CN Tân Tạo_#SAMCO-TT',
      },
      {
        value: '(HCM) Q.Tân Bình - ĐL Lý Thường Kiệt_#TLTK',
      },
      {
        value: '(HCM) Q.Tân Phú - ĐL Lý Thường Kiệt_#TLTK_TP',
      },
      {
        value: '(HCM) Q.7 - ĐL Phú Mỹ Hưng (Tân Phong)_#TPMH',
      },
      {
        value: '(HCM) Q.7 - ĐL Phú Mỹ Hưng_#TPMH',
      },
      {
        value: '(HCM) Q.6 - ĐL Tsusho Saigon Motor Service_#TTSAMCO',
      },
      {
        value: '(HCM) Q. Thủ Đức - ĐL Đông Sài Gòn - CN Thủ Đức_#TESC',
      },
      {
        value: '(HCM) Q.9 - ĐL Đông Sài Gòn - CN Quận 9_#TESC',
      },
    ],
    'Khanh Hoa': [
      {
        value: '(Khánh Hoà) ĐL Nha Trang_#TNT',
      },
    ],
    'Phu Yen': [
      {
        value: '(Phú Yên) ĐL Phú Yên_TBY',
      },
    ],
    'Long An': [
      {
        value: '(Long An) ĐL Long An_#TLA',
      },
    ],
    'Nam Dinh': [
      {
        value: '(Nam Định) ĐL Giải Phóng_#TGP-ND',
      },
    ],
    'Nghe An': [
      {
        value: '(Nghệ An) ĐL Sông Lam_#TSLC',
      },
      {
        value: '(Nghệ An) ĐL Vinh_#TVC',
      },
    ],
    'Phu Tho': [
      {
        value: '(Phú Thọ) ĐL IDMC Phú Thọ_#TPT',
      },
    ],
    'Lao Cai': [
      {
        value: '(Lào Cai) ĐL Lao Cai_#TLC',
      },
    ],
    'Quang Binh': [
      {
        value: '(Quảng Bình) ĐL Quảng Bình_#TQB',
      },
    ],
    'Quang Ninh': [
      {
        value: '(Quảng Ninh) ĐL Cẩm Phả_#TCP',
      },
      {
        value: '(Quảng Ninh) ĐL Quảng Ninh_#TQN',
      },
    ],
    'Son La': [
      {
        value: '(Sơn La) ĐL Tây Bắc_#TTBA',
      },
    ],
    'Tay Ninh': [
      {
        value: '(Tây Ninh) ĐL Lý Thường Kiệt_#TLTK-TN',
      },
    ],
    'Tien Giang': [
      {
        value: '(Tiền Giang) ĐL Tiền Giang_#TTG',
      },
    ],
    'Thai Nguyen': [
      {
        value: '(Thái Nguyên) ĐL Thái Nguyên_#TTN',
      },
    ],
    'Thai Binh': [
      {
        value: '(Thái Bình) ĐL Thái Bình_#TTB',
      },
    ],
    'Thanh Hoa': [
      {
        value: '(Thanh Hoá) ĐL Doanh Thu_#TDT',
      },
      {
        value: '(Thanh Hoá) ĐL Thanh Hoá_#TTH',
      },
    ],
    'Thua Thien Hue': [
      {
        value: '(Thừa Thiên Huế) ĐL Huế_#THC',
      },
    ],
    'Vinh Phuc': [
      {
        value: '(Vĩnh Phúc) ĐL Toyota Hiroshima Vĩnh Phúc_#THVP',
      },
    ],
    'Vinh Long': [
      {
        value: '(Vĩnh Long) ĐL Vĩnh Long_#TVL',
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
