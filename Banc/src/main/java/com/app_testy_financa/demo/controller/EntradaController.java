package com.app_testy_financa.demo.controller;
import com.app_testy_financa.demo.Model.Entradas;
import com.app_testy_financa.demo.Repository.EntradaRepository;
import com.app_testy_financa.demo.domain.DTOS.entradasDTO;
import com.app_testy_financa.demo.service.entradaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.MonthDay;
import java.time.format.DateTimeFormatter;
import java.util.List;


@RestController
@RequestMapping("")
public class EntradaController {
    @Autowired
    private entradaService entradaService;
    @Autowired
    private EntradaRepository entradaRepository;



    @PostMapping("/create")
    public ResponseEntity<?> entradaCreate(@RequestBody entradasDTO dto) {
        try {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM");
                MonthDay monthDay = MonthDay.parse(dto.getData(), formatter);
                LocalDate dataComAno = monthDay.atYear(LocalDate.now().getYear());

                Entradas entrada = new Entradas(dto.getDescricao(), dto.getValor(), dataComAno);
                entradaService.entradaCreate(entrada);

            return ResponseEntity.ok("Entradas salvas com sucesso.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao salvar entradas.");
        }
    }

   @GetMapping("/entrada")
   public List<Entradas> entradaGetAll() {
       List<Entradas> entradas =entradaRepository.findAll();
       return entradas;
   }


}
