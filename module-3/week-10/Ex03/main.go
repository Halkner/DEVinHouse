package main

import "fmt"

type Revisao interface {
	fazerRevisao()
}

type Veiculo struct {
	marca  string
	modelo string
}

type Moto struct {
	Veiculo
	cilindradas uint16
}

func (m Moto) fazerRevisao() {
	fmt.Println("Fazendo revisão da moto", m.marca, m.modelo, "com", m.cilindradas, "cilindradas.")
}

type Carro struct {
	Veiculo
	numeroDePortas uint8
}

func (c Carro) fazerRevisao() {
	fmt.Println("Fazendo revisão do carro", c.marca, c.modelo, "com", c.numeroDePortas, "portas.")
}

func agendarRevisao(r Revisao) {
	r.fazerRevisao()
}

func main() {

	meuCarro := Carro{
		Veiculo:        Veiculo{marca: "Tesla", modelo: "S"},
		numeroDePortas: 4,
	}

	minhaMoto := Moto{
		Veiculo:     Veiculo{marca: "Yamaha", modelo: "XJ6"},
		cilindradas: 600,
	}

	agendarRevisao(meuCarro)
	agendarRevisao(minhaMoto)

}
