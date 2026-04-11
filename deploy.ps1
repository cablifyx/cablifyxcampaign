# Quick Deployment Script for Sathubfix

# Build the project first to ensure everything works
Write-Host "Building the project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "`nStaging all changes..." -ForegroundColor Cyan
    git add .
    
    $commitMessage = Read-Host "`nEnter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Update website - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
    
    Write-Host "Committing changes..." -ForegroundColor Cyan
    git commit -m "$commitMessage"
    
    Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
    git push origin main
    
    Write-Host "`n✅ Deployment initiated!" -ForegroundColor Green
    Write-Host "Visit https://github.com/sathubfix/sathubfix/actions to monitor deployment" -ForegroundColor Yellow
    Write-Host "Your site will be live at https://sathubfix.com in 2-5 minutes" -ForegroundColor Yellow
} else {
    Write-Host "`nNo changes to commit." -ForegroundColor Yellow
    Write-Host "Would you like to trigger a manual deployment anyway? (y/n)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq 'y') {
        Write-Host "Opening GitHub Actions page..." -ForegroundColor Cyan
        Start-Process "https://github.com/sathubfix/sathubfix/actions"
    }
}
