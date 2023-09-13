import requests
from bs4 import BeautifulSoup

url = 'https://www.onlinetrade.ru'

def ul_to_dict(ul_tag:BeautifulSoup)->dict:
    if not ul_tag:
        return dict()
    ul_dict = dict()
    for li in ul_tag.find_all('li'):
        name, value = li.text.split(sep=':')
        ul_dict[name]=value[:-1]
    return ul_dict

def get_processor_data(processor_link:str)->dict:
    response = requests.get(url+processor_link+'#tabs_description')
    processor = BeautifulSoup(response.content, 'html.parser')
    print('processor:', response.status_code)
    processor_data = dict()
    specifications = ul_to_dict(processor.find('ul', {'class':'featureList'}))
    try:
        processor_data['Img'] = processor.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        processor_data['Name'] = processor.find('div', {'class':'productPage__card__WOslider'}).find('h1').text
        print(processor_data['Name'])
        processor_data['Socket'] = specifications['Тип разъема (Socket)']
        processor_data['Number of cores'] = specifications['Количество ядер']
        processor_data['Number of streams'] = specifications['Количество потоков']
        processor_data['Frequency'] = specifications['Номинальная частота (ГГц)']
        processor_data['TDP'] = specifications['Рассеиваемая мощность']
        processor_data['Price'] = processor.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return processor_data

def get_motherboard_data(motherboard_link:str)->dict:
    response = requests.get(url+motherboard_link+'#tabs_description')
    motherboard = BeautifulSoup(response.content, 'html.parser')
    print('motherboard:', response.status_code)
    data = dict()
    specifications = ul_to_dict(motherboard.find('ul', {'class':'featureList'}))
    # print(specifications)
    try:
        data['Img'] = motherboard.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = motherboard.find('h1').text
        print(data['Name'])
        data['Socket'] = specifications['Тип разъема процессора (socket)']
        data['Chipset'] = specifications['Чипсет']
        data['Memory Type'] = specifications['Тип памяти']
        data['Form Factor'] = specifications['Форм-фактор']
        data['Price'] = motherboard.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_videocard_data(videocard_link:str)->dict:
    response = requests.get(url+videocard_link+'#tabs_description')
    videocard = BeautifulSoup(response.content, 'html.parser')
    print('videocard:', response.status_code)
    data = dict()
    specifications = ul_to_dict(videocard.find('ul', {'class':'featureList'}))
    # print(specifications)
    try:
        data['Img'] = videocard.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = videocard.find('h1').text
        print(data['Name'])
        data['Video Memory'] = specifications['Объем видеопамяти']
        data['Frequency'] = specifications['Частота графического процессора (базовая)']
        data['Video Memory Type'] = specifications['Тип видеопамяти']
        # data['Power'] = specifications['Рекомендуемая мощность блока питания']
        data['Price'] = videocard.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_RAM_data(RAM_link:str)->dict:
    response = requests.get(url+RAM_link+'#tabs_description')
    RAM = BeautifulSoup(response.content, 'html.parser')
    print('RAM:', response.status_code)
    data = dict()
    specifications = ul_to_dict(RAM.find('ul', {'class':'featureList'}))
    print(specifications)
    try:
        data['Img'] = RAM.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = RAM.find('h1').text
        print(data['Name'])
        data['Frequency'] = specifications['Тактовая частота']
        data['Memory'] = specifications['Объем одного модуля']
        data['Memory Type'] = specifications['Тип памяти']
        # data['Power'] = specifications['Рекомендуемая мощность блока питания']
        data['Price'] = RAM.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_power_block_data(power_block_link:str)->dict:
    response = requests.get(url+power_block_link+'#tabs_description')
    power_block = BeautifulSoup(response.content, 'html.parser')
    print('power_block:', response.status_code)
    data = dict()
    specifications = ul_to_dict(power_block.find('ul', {'class':'featureList'}))
    print(specifications)
    try:
        data['Img'] = power_block.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = power_block.find('h1').text
        print(data['Name'])
        data['Form Factor'] = specifications['Форм-фактор']
        data['Power'] = specifications['Мощность']
        data['Price'] = power_block.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_body_data(body_link:str)->dict:
    response = requests.get(url+body_link+'#tabs_description')
    body = BeautifulSoup(response.content, 'html.parser')
    print('body:', response.status_code)
    data = dict()
    specifications = ul_to_dict(body.find('ul', {'class':'featureList'}))
    print(specifications)
    try:
        data['Img'] = body.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = body.find('h1').text
        print(data['Name'])
        data['Form Factor'] = specifications['Форм-фактор']
        data['Price'] = body.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_cpu_cooler_data(cpu_cooler_link:str)->dict:
    response = requests.get(url+cpu_cooler_link+'#tabs_description')
    cpu_cooler = BeautifulSoup(response.content, 'html.parser')
    print('cpu_cooler:', response.status_code)
    data = dict()
    specifications = ul_to_dict(cpu_cooler.find('ul', {'class':'featureList'}))
    # print(specifications)
    try:
        data['Img'] = cpu_cooler.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = cpu_cooler.find('h1').text
        print(data['Name'])
        data['Socket'] = specifications['Socket']
        data['TDP'] = specifications['Максимальное тепловыделение процессора (TDP)']
        data['Price'] = cpu_cooler.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_water_cooling_data(water_cooling_link:str)->dict:
    response = requests.get(url+water_cooling_link+'#tabs_description')
    water_cooling = BeautifulSoup(response.content, 'html.parser')
    print('water_cooling:', response.status_code)
    data = dict()
    specifications = ul_to_dict(water_cooling.find('ul', {'class':'featureList'}))
    print(specifications)
    try:
        data['Img'] = water_cooling.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = water_cooling.find('h1').text
        print(data['Name'])
        data['Socket'] = specifications['Socket']
        data['TDP'] = 999
        data['Price'] = water_cooling.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_HDD_data(HDD_link:str)->dict:
    response = requests.get(url+HDD_link+'#tabs_description')
    HDD = BeautifulSoup(response.content, 'html.parser')
    print('HDD:', response.status_code)
    data = dict()
    specifications = ul_to_dict(HDD.find('ul', {'class':'featureList'}))
    print(specifications)
    try:
        data['Img'] = HDD.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = HDD.find('h1').text
        print(data['Name'])
        data['Memory'] = specifications['Объем']
        data['Disk_type'] = 'HDD'
        data['Price'] = HDD.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def get_SSD_data(SSD_link:str)->dict:
    response = requests.get(url+SSD_link+'#tabs_description')
    SSD = BeautifulSoup(response.content, 'html.parser')
    print('SSD:', response.status_code)
    data = dict()
    specifications = ul_to_dict(SSD.find('ul', {'class':'featureList'}))
    print(specifications)
    try:
        data['Img'] = SSD.find('img', {'id': 'js__popupCatalogItem_bigImage__ID'})['src']
        # print(data['Img'])
        data['Name'] = SSD.find('h1').text
        print(data['Name'])
        data['Memory'] = specifications['Объем SSD']
        data['Disk_type'] = 'SSD'
        data['Price'] = SSD.find('span', {'class': 'js__actualPrice'}).text[:-2]
    except:
        return None
    return data

def parse(type_of_components:str, parse_func)->list:
    processors_data = []
    num_pages = 1
    for p in range(num_pages):
        response = requests.get(url+'/catalogue/'+type_of_components+'/?page='+str(p))
        # print(response.status_code)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        processors = soup.find_all('div', {'class':'indexGoods__item'})
        # print(processors)
        for processor_link in processors:
            processor_data = parse_func(processor_link.find('a', {'class':'indexGoods__item__name'})['href'])
            if processor_data:
                processors_data.append(processor_data)
        
    return processors_data

if __name__=="__main__":
    types_of_components = [
        'protsessory-c342',
        'materinskie_platy-c340', 
        'videokarty-c338', 
        'operativnaya_pamyat-c341', 
        'bloki_pitaniya-c339',
        'kompyuternye_korpusa-c1323',
        'kulery_dlya_protsessorov-c1492',
        'sistemy_vodyanogo_okhlazhdeniya_pk-c4941',
        'zhestkie_diski_hdd-c174',
        'ssd_diski-c294'
    ]
    parse_functions = [
        get_processor_data, 
        get_motherboard_data, 
        get_videocard_data, 
        get_RAM_data, 
        get_power_block_data,
        get_body_data,
        get_cpu_cooler_data,
        get_water_cooling_data,
        get_HDD_data,
        get_SSD_data   
    ]

    a=parse(types_of_components[8], parse_functions[8])
    print(a)
