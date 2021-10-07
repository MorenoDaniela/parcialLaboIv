import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/Servicios/git.service';
import { ToasterService } from 'src/app/Servicios/toaster.service';
import { Github } from 'src/Clases/github';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public perfilGit: Github = new Github();
  constructor(public toastr :ToasterService, public git: GitService) { }

  ngOnInit(): void {
    this.cargarGit();
  }


  cargarGit()
  {
    this.git.getGitHub().subscribe(
      data => {
        console.log(data);
        var dat:any = data;
      this.perfilGit.avatar_url = dat.avatar_url;
      this.perfilGit.followers = dat.followers;
      this.perfilGit.following=dat.following;
      this.perfilGit.login = dat.login;
      this.perfilGit.repos_url = dat.repos_url;
      }
    );
  }

  // mostrarExito()
  // {
  //   this.toastr.showExito("hola","titulo",300);
  // }

  // mostrarError()
  // {
  //   this.toastr.showError("hola","titulo",300);
  // }
}
