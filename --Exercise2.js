//1.import component raect-native
import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
//2.buat component
// component adalah function yang return jsx
const Exercise2 = () => {
  return (
    //jsx
    //view as a container
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Biodata</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Image style={styles.img1} source={require('./assets/kawonal.jpg')} />
        <Text style={styles.subTitle}>Nama : Avrilia Irena Kawonal</Text>
        <Text style={styles.subTitle}>TTL : Bitung 14 April 2024</Text>
        <Text style={styles.subTitle}>Agama : Kristen Protestan</Text>
        <Text style={styles.subTitle}>
          Pendidikan : S1 Universitas Klabat (sementara)
        </Text>
        <Text style={styles.subTitle}>No.Telp : 08953********</Text>
        <Text style={styles.subTitle}>Email : avriliakawonal14@gmail.com</Text>
        <Text style={styles.subTitle}>
          Hobi : Menonton, membaca, main game, olahraga
        </Text>
        <Text style={styles.subTitle}>Nama Ortu : F Kawonal & D Tampi</Text>
        <Text style={styles.subTitle}>Warna Fav : Hitam,pink,merah</Text>
        <Text style={styles.title1}>Tentang Saya</Text>
        <Text style={styles.subTitle1}>
          "Saya adalah mahasiswa Fakultas Ilmu Komputer, Program Studi
          Informatika, Universitas Klabat. angkatan 2022, dan saat ini telah
          memasuki semester 6. Selama perkuliahan, saya telah berpartisipasi
          dalam berbagai proyek tim, termasuk pengembangan robotik, sistem
          inventory untuk Puskesmas Kauditan, sistem bisnis kayu kelapa, serta
          manajemen Kost Corner. Selain itu, saya juga merancang sistem
          pemesanan asrama di Universitas Klabat, mengembangkan game sederhana
          di Unity, serta menyusun operasional database untuk bisnis kayu
          kelapa. Pengalaman ini telah memperkaya wawasan dan keterampilan saya
          dalam dunia teknologi dan sistem informasi."
        </Text>
      </ScrollView>
    </>
  );
};

//3.export component
export default Exercise2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius: 20, //untuk ujung container atau border
    margin: 30, //border with komponen terluar
    padding: 30, //border with text component(inner)
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'pink',
    textAlign: 'center',
    //margin bisa juga dilakukan disini
  },

  title1: {
    fontSize: 40,
    fontWeight: '700',
    color: 'pink',
    textAlign: 'center',
    backgroundColor: 'black',
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius: 20, //untuk ujung container atau border
    margin: 30, //border with komponen terluar
    padding: 30,
  },

  img1: {
    height: 230,
    width: 200,
    marginLeft: 110,
    borderRadius: 5,
    marginBottom: 30,
  },

  subTitle: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderWidth: 1,
  },

  subTitle1: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderWidth: 1,
  },
});
