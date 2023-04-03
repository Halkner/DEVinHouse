package main

import "fmt"

type Carteira interface {
	Transferir(valor float64, endereco string) error
	Receber(valor float64)
	MostrarSaldo() float64
}

type Endereco struct {
	publicKey  string
	privateKey string
	saldo      float64
}

func (e *Endereco) Transferir(valor float64, endereco string) error {
	if valor > e.saldo {
		return fmt.Errorf("Saldo insuficiente.")
	}
	e.saldo -= valor
	return nil
}

func (e *Endereco) Receber(valor float64) {
	e.saldo += valor
}

func (e *Endereco) Saldo() float64 {
	return e.saldo
}

func enviarBitcoin(valor float64, enderecoDestino string, endereco *Endereco) error {
	err := endereco.Transferir(valor, enderecoDestino)

	if err != nil {
		return err
	}

	return nil
}

func main() {
	endereco := &Endereco{
		publicKey:  "0x3bcecc2b784d7d0f16a23f84403b82a096b8d4af6f746fe6f29dd6b0e8d39726",
		privateKey: "0xc2d8c17aa52d0b77132794b4697a9d9d94aa7b1c02a0700637e9408c797abebb",
		saldo:      10.0,
	}

	fmt.Printf("Saldo atual: %.2f\n", endereco.Saldo())

	var valorSaque float64
	fmt.Print("Valor que deseja sacar: ")
	fmt.Scan(&valorSaque)

	err := enviarBitcoin(valorSaque, "0x3bcecc2b784d7d0f16a23f84403b82a096b8d4af6f746fe6f29dd6b0e8d39726", endereco)

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Printf("Novo saldo: %.2f\n", endereco.Saldo())
}
